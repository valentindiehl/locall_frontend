import React, {Component} from 'react';
import PeerHelper from '../../helpers/peer-helper';
import '../css/streamContainer.css';
import {socket} from "../../App";

export default class StreamContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			localStream: {},
			remoteStreamUrl: '',
			streamUrl: '',
			initiator: false,
			peer: {},
			full: false,
			connecting: false,
			waiting: true,
			roomId: ''
		};
	}

	videoCall = new PeerHelper();

	componentWillUnmount() {
		socket.disconnect();
	}

	componentDidMount() {
		const self = this;

		socket.on('init', () => {
			self.setState({initiator: true});
		});
		socket.on('ready', () => {
			self.enter(self.state.roomId);
		});
		socket.on('desc', data => {
			if (data.type === 'offer' && self.state.initiator) return;
			if (data.type === 'answer' && !self.state.initiator) return;
			self.call(data);
		});
		socket.on('disconnected', () => {
			self.setState({initiator: true});
		});
		socket.on('full', () => {
			self.setState({full: true});
		});
	}

	join(roomId) {
		console.log("Stream wants to join room", roomId)
		this.setState({roomId: roomId})
		const self = this;
		this.getUserMedia().then(() => {
			socket.emit('joinStream', {roomId: self.state.roomId});
		});
	}

	getUserMedia() {
		return new Promise((resolve, reject) => {
			const constraints = {
				video: false,
				audio: true
			};
			navigator.mediaDevices.getUserMedia(
				constraints).then(
				stream => {
					this.setState({streamUrl: stream, localStream: stream});
					this.localVideo.srcObject = stream;
					resolve();
				}).catch(err => {
				console.log("Sorry, your browser does not support user media.", err);
			});
		});
	}

	enter = () => {
		this.setState({connecting: true});
		const peer = this.videoCall.init(
			this.state.localStream,
			this.state.initiator
		);
		this.setState({peer});

		peer.on('signal', data => {
			const signal = {
				room: this.state.roomId,
				desc: data
			};
			socket.emit('signal', signal);
		});
		peer.on('stream', stream => {
			this.remoteVideo.srcObject = stream;
			this.setState({connecting: false, waiting: false});
		});
		peer.on('error', function (err) {
			console.log(err);
		});
	};
	call = otherId => {
		this.videoCall.connect(otherId);
	};
	renderFull = () => {
		if (this.state.full) {
			return 'The room is full';
		}
	};

	render() {
		return (
			<div className='video-wrapper'>
				<div className='local-video-wrapper'>
					<video
						autoPlay
						id='localVideo'
						muted
						ref={video => (this.localVideo = video)}
					/>
				</div>
				<video
					autoPlay
					className={`${
						this.state.connecting || this.state.waiting ? 'hide' : ''
					}`}
					id='remoteVideo'
					ref={video => (this.remoteVideo = video)}
				/>
				{this.state.connecting && (
					<div className='status'>
						<p>Establishing connection...</p>
					</div>
				)}
				{this.state.waiting && (
					<div className='status'>
						<p>Waiting for someone...</p>
					</div>
				)}
				{this.renderFull()}
			</div>
		);
	}
}
