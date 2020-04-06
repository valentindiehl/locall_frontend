import React, {Component} from 'react';
import {socket} from "../../../../../../../App";
import PropTypes from 'prop-types';

/**
 * Component handling the speaker events of the participants of the chat room.
 */
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

ChatVoiceComponent.propTypes = {
	/** Reference to function handling the new speaking state of a participant. */
	onSpeaking: PropTypes.func.isRequired
}
