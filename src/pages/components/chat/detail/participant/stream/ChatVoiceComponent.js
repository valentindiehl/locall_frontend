import React, {Component} from 'react';
import {socket} from "../../../../../../App";

export default class ChatVoiceComponent extends Component {

	componentDidMount() {
		const self = this;
		socket.on('participantSpeaking', function (data) {
			self.props.onSpeaking({socketId: data.socketId, speaking: true});
		});
		socket.on('participantStoppedSpeaking', function (data) {
			self.props.onSpeaking({socketId: data.socketId, speaking: false});
		});
	}

	componentWillUnmount() {
		socket.off('participantSpeaking');
		socket.off('participantStoppedSpeaking');
	}

	render() {
		return null;
	}
}
