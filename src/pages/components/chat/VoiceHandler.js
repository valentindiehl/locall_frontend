import React, {Component} from 'react';
import {socket} from "../../../App";

export default class VoiceHandler extends Component {

	componentDidMount() {
		const self = this;
		socket.on('participantSpeaking', function (data) {
			self.props.onSpeaking({socketId: data.socketId, speaking: true});
		});
		socket.on('participantStoppedSpeaking', function (data) {
			self.props.onSpeaking({socketId: data.socketId, speaking: false});
		});
	}

	render() {
		return null;
	}
}
