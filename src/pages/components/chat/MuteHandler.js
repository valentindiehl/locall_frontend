import React, {Component} from "react";
import {socket} from "../../../App";

export default class MuteHandler extends Component {

	componentDidMount() {
		const self = this;
		socket.on('participantMute', function (data) {
			self.props.onParticipantMute({socketId: data.socketId, muted: true});
		});

		socket.on('participantUnmute', function (data) {
			self.props.onParticipantMute({socketId: data.socketId, muted: false});
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let newMutedState = this.props.muted;
		if (prevProps.muted === newMutedState) return;
		if (!this.props.localStream) return;
		this.props.localStream.getAudioTracks().forEach(t => t.enabled = !newMutedState);
		if (newMutedState) {
			socket.emit('mute');
		} else {
			socket.emit('unmute');
		}
	}

	render() {
		return null;
	}
}
