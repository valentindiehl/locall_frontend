import React, {Component} from 'react';
import PeerHelper from "../../../../../../helpers/peer-helper";
import AudioHelper from "../../../../../../helpers/audio-helper";
import {socket} from '../../../../../../App';
import ChatStreamRenderer from "./ChatStreamRenderer";
import PropTypes from 'prop-types';

const NUMBER_STREAMS = 8;

/**
 * Component handling the logic of local and remote streams.
 */
export default class ChatStreamComponent extends Component {

	// noinspection DuplicatedCode
	constructor(props) {
		super(props);
		this.state = {
			waiting: true,
		};

		this.reset();

		this.enterRoom = this.enterRoom.bind(this);
		this.getUserMedia = this.getUserMedia.bind(this);
		this.establishPeerConnection = this.establishPeerConnection.bind(this);
		this.call = this.call.bind(this);
		this.setLocalStream = this.setLocalStream.bind(this);
	}


	reset() {
		this.setLocalStream(null);
		this.peerConnectionFactory = new PeerHelper();
		this.audioProcessorFactory = new AudioHelper();
		this.peers = {};
		this.initiations = {};

		this.socketIdToPeerId = {};
		this.peerIdToSocketId = {};

		this.peerIdToStream = {};
		this.peerIdToVideoId = {};
		this.videoIdToPeerId = {};
		this.getVideoIds().map(id => this.videoIdToPeerId[id] = null);
	}

	getVideoIds() {
		return [...Array(NUMBER_STREAMS).keys()].map(x => "stream_" + x);
	}

	componentWillUnmount() {
		this.leaveRoom();
	}

	componentDidMount() {
		const self = this;

		socket.on('signal', data => {
			let senderSocket = data.senderSocket;
			const initiator = self.initiations[senderSocket];
			if (data.signal.type === 'offer' && initiator) return;
			if (data.signal.type === 'answer' && !initiator) return;
			console.debug("Got data", data);
			self.call(this.socketIdToPeerId[senderSocket], data.signal);
		});
		socket.on('full', () => {
			self.setState({full: true});
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.room === this.props.room) {
			// Nothing changed
			return;
		}
		const oldRoom = prevProps.room;
		const newRoom = this.props.room;
		console.debug("Old Room", oldRoom);
		console.debug("New Room", newRoom);
		if (!oldRoom && !!newRoom) {
			// We entered a room
			this.enterRoom(newRoom);
		} else if (!!oldRoom && !newRoom) {
			// We left the room
			this.leaveRoom();
		} else if (!!oldRoom && !!newRoom) {
			// The room got updated – Check if participants changed
			if (oldRoom.length === newRoom.length) return;
			if (oldRoom.length < newRoom.length) {
				// Yay! We got a new participant!
				this.welcomeParticipant(newRoom, oldRoom);
			} else {
				this.farewellParticipant(newRoom, oldRoom);
			}
		}
	}

	enterRoom(room) {
		// Check if there are already other participants
		if (room.length === 1) {
			// That is not the case so we wait for others
			this.setState({waiting: true});
		} else {
			// That is the case so we establish a peer connection but not as initiator
			// Get User Media and then establish the connection
			const roomIds = Object.keys(room.sockets);
			const otherPeers = roomIds.filter(x => x !== socket.id);
			this.getUserMedia().then(() => {
				// Get other socket ids
				this.props.onConnecting(true);
				otherPeers.forEach(peerId => {
					this.establishPeerConnection(peerId);
					this.props.onWelcomeParticipant(peerId, room.participants[peerId]);
				});

			})
		}
	}

	leaveRoom() {
		// 1. Close connections to peers
		Object.values(this.peers).forEach(p => p.destroy());
		// 2. Stop and close User Media Streams
		Object.values(this.peerIdToStream).forEach(stream => {
			stream.getTracks().forEach(track => track.stop);
		});
		if (!!this.localStream) {
			this.localStream.getTracks().forEach(track => track.stop());
		}
		this.reset();
	}

	welcomeParticipant(newRoom, oldRoom) {
		let newSockets = Object.keys(newRoom.sockets);
		let prevSockets = Object.keys(oldRoom.sockets);
		const peerSocketId = newSockets.filter(x => !prevSockets.includes(x))
			.concat(prevSockets.filter(x => newSockets.includes(x)))[0];
		this.initiations[peerSocketId] = true;
		this.props.onWelcomeParticipant(peerSocketId, newRoom.participants[peerSocketId]);
		if (this.state.waiting) {
			// 2.1. For sure, we are not waiting anymore
			this.props.onConnecting(true);
			this.setState({waiting: false});
			this.getUserMedia().then(() => this.establishPeerConnection(peerSocketId));
		} else {
			this.establishPeerConnection(peerSocketId);
		}
	}

	farewellParticipant(newRoom, oldRoom) {
		// Yikes! A participant left us!
		let newSockets = Object.keys(newRoom.sockets);
		let prevSockets = Object.keys(oldRoom.sockets);
		const peerSocketId = prevSockets.filter(x => !newSockets.includes(x))
			.concat(newSockets.filter(x => prevSockets.includes(x)))[0];
		this.props.onFarewellParticipant(peerSocketId);
		// 1. Close peer connection
		let peerId = this.socketIdToPeerId[peerSocketId];
		if (!!peerId) {
			this.peers[peerId].destroy();
			// 2. Cleanup socket to peer maps
			delete this.socketIdToPeerId[peerSocketId];
			delete this.peerIdToSocketId[peerId];
			// 3. Remove peer from list of peers
			delete this.peers[peerId];
			// 4. Cleanup video stream
			const peerIdToStreamElement = this.peerIdToStream[peerId];
			if (peerIdToStreamElement) {
				peerIdToStreamElement.getTracks().forEach(track => track.stop());
				delete this.peerIdToStream[peerId];
			}
			const videoId = this.peerIdToVideoId[peerId];
			delete this.peerIdToVideoId[peerId];
			this.videoIdToPeerId[videoId] = null;
		}
		if (newRoom.length > 1) return;
		// 4. If we are now the only remaining participant, we are waiting
		this.setState({waiting: true});
		// 4.1. Close our media stream for now
		if (!!this.localStream) {
			this.localStream.getTracks().forEach(track => track.stop());
			this.reset();
		}
	}

	getUserMedia() {
		return new Promise((resolve) => {
			const constraints = {
				video: false,
				audio: true
			};
			navigator.mediaDevices.getUserMedia(
				constraints).then(
				stream => {
					this.setLocalStream(stream);
					this.audioProcessorFactory.init(stream, socket);
					resolve();
				}).catch(err => {
				console.debug("Sorry, your browser does not faq user media.", err);
				alert("Sorry, your browser does not faq user media.");
			});
		});
	}

	establishPeerConnection(peerSocketId) {
		this.setState({connecting: true});
		const peer = this.peerConnectionFactory.init(
			this.localStream,
			!!this.initiations[peerSocketId]
		);

		this.peers[peer._id] = peer;
		this.peerIdToSocketId[peer._id] = peerSocketId;
		this.socketIdToPeerId[peerSocketId] = peer._id;

		peer.on('signal', data => {
			console.debug("Peer signal", peer);
			const signal = {
				signal: data,
				senderPeer: peer._id,
				receiverSocket: this.peerIdToSocketId[peer._id]
			}
			socket.emit('signal', signal);
		});
		peer.on('stream', stream => {
			this.props.onConnecting(false);
			console.debug("Got Stream!", stream);
			this.attachVideoStream(peer._id, stream);
		});

		peer.on('error', function (err) {
			console.debug(err);
		});
	}

	attachVideoStream(peerId, stream) {
		const videoIds = Object.keys(this.videoIdToPeerId);
		for (let i = 0; i < videoIds.length; i++) {
			const videoId = videoIds[i];
			if (!this.videoIdToPeerId[videoId]) {
				console.debug("Adding", stream, "to", videoId);
				this.videoIdToPeerId[videoId] = peerId;
				this.peerIdToVideoId[peerId] = videoId;
				this.peerIdToStream[peerId] = stream;
				const videoElement = document.getElementById(videoId);
				if ('srcObject' in videoElement) {
					videoElement.srcObject = stream;
				} else {
					videoElement.src = window.URL.createObjectURL(stream); // for older browsers
				}
				break;
			}
		}
	}

	call(peerId, otherId) {
		const peer = this.peers[peerId];
		if (!peer) return;
		this.peerConnectionFactory.connect(peer, otherId);
	}

	setLocalStream(stream) {
		this.localStream = stream;
		this.props.onLocalStream(stream);
	}

	render() {
		return <ChatStreamRenderer videoIds={this.getVideoIds()}/>
	}
}

ChatStreamComponent.propTypes = {
	/** The socket.io room object indicating the current chat room of the client. */
	room: PropTypes.shape({
		/** The participants of the room. Each entry maps from the socketId to the participant's userId. */
		participants: PropTypes.object.isRequired,
	}),
	/** Reference to function handling a new connection status. */
	onConnecting: PropTypes.func.isRequired,
	/** Reference to function handling a new participant to the room. */
	onWelcomeParticipant: PropTypes.func.isRequired,
	/** Reference to a function handling a participant that has left. */
	onFarewellParticipant: PropTypes.func.isRequired,
	/** Reference to a function handling the change of the client's local MediaStream object. */
	onLocalStream: PropTypes.func.isRequired
}
