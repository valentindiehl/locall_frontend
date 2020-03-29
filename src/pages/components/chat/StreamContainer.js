import React, {Component} from 'react';
import PeerHelper from '../../../helpers/peer-helper';
import '../../css/chat/streamContainer.css';
import {socket} from "../../../App";
import Container from "react-bootstrap/Container";

const NUMBER_STREAMS = 8;

export default class StreamContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			waiting: true
		};

		this.localStream = null;
		this.reset();

		this.renderStreams = this.renderStreams.bind(this);
		this.enterRoom = this.enterRoom.bind(this);
		this.getUserMedia = this.getUserMedia.bind(this);
		this.establishPeerConnection = this.establishPeerConnection.bind(this);
		this.call = this.call.bind(this);
	}


	reset() {
		console.log("Resetting");
		this.peerConnectionFactory = new PeerHelper();
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
			console.log("Got data", data);
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
		console.log("Old Room", oldRoom);
		console.log("New Room", newRoom);
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
		console.log("Entering room");
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
				otherPeers.forEach(peerId => this.establishPeerConnection(peerId));
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
			console.log("Closing local stream!");
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
		if (this.state.waiting) {
			// 2.1. For sure, we are not waiting anymore
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
			console.log("Closing local stream");
			this.localStream.getTracks().forEach(track => track.stop());
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
					this.localStream = stream;
					resolve();
				}).catch(err => {
				console.log("Sorry, your browser does not support user media.", err);
			});
		});
	}

	establishPeerConnection(peerSocketId) {
		console.log("Establishing connection to", peerSocketId);
		this.setState({connecting: true});
		const peer = this.peerConnectionFactory.init(
			this.localStream,
			!!this.initiations[peerSocketId]
		);

		this.peers[peer._id] = peer;
		this.peerIdToSocketId[peer._id] = peerSocketId;
		this.socketIdToPeerId[peerSocketId] = peer._id;

		peer.on('signal', data => {
			console.log("Peer signal", peer);
			const signal = {
				signal: data,
				senderPeer: peer._id,
				receiverSocket: this.peerIdToSocketId[peer._id]
			}
			socket.emit('signal', signal);
		});
		peer.on('stream', stream => {
			console.log("Got Stream!", stream);
			this.attachVideoStream(peer._id, stream);
		});

		peer.on('error', function (err) {
			console.log(err);
		});
	}

	attachVideoStream(peerId, stream) {
		const videoIds = Object.keys(this.videoIdToPeerId);
		console.log(this.videoIdToPeerId);
		for (let i = 0; i < videoIds.length; i++) {
			const videoId = videoIds[i];
			if (!this.videoIdToPeerId[videoId]) {
				console.log("Adding", stream, "to", videoId);
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
		console.log(this.peerIdToSocketId);
		console.log(this.socketIdToPeerId);
		const peer = this.peers[peerId];
		if (!peer) return;
		this.peerConnectionFactory.connect(peer, otherId);
	}

	renderStreams() {
		const self = this;
		return (
			self.getVideoIds().map((id) => {
				return (
					<video
						id={id}
						key={id}
						autoPlay
						className='remoteStream'
					/>
				)
			}));
	}

	render() {
		return (
			<Container>
				{this.renderStreams()}
			</Container>
		);
	}
}
