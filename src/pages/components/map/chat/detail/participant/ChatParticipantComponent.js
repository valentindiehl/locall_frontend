import React, {Component} from 'react';
import ChatParticipantRenderer from "./ChatParticipantRenderer";
import ChatVoiceComponent from "./stream/ChatVoiceComponent";
import ChatStreamComponent from "./stream/ChatStreamComponent";
import Container from "react-bootstrap/Container";
import ChatButtonComponent from "./button/ChatButtonComponent";
import PropTypes from 'prop-types';
import ApiHelper from "../../../../../../helpers/api-helper";
import ChatLeavePrompt from "./ChatLeavePrompt";

/**
 * Component wrapping logic and rendering related with the participants
 * of a chat room.
 */
export default class ChatParticipantComponent extends Component {

	// noinspection DuplicatedCode
	constructor(props) {
		super(props);
		this.state = {
			connecting: false,
			me: null,
			otherParticipants: {},
			localStream: null
		}

		this.handleConnecting = this.handleConnecting.bind(this);
		this.handleParticipantStatus = this.handleParticipantStatus.bind(this);
		this.handleParticipantMute = this.handleParticipantMute.bind(this);
		this.handleParticipantSpeaking = this.handleParticipantSpeaking.bind(this);
		this.handleWelcomeParticipant = this.handleWelcomeParticipant.bind(this);
		this.handleFarewellParticipant = this.handleFarewellParticipant.bind(this);
		this.handleLocalStream = this.handleLocalStream.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let myId = this.props.myId;
		if (!!myId && myId !== prevProps.myId && !!this.props.mySocketId) {
			this.fetchMe();
		}
	}

	fetchUser(id, callback) {
		console.debug("Fetching", id);
		ApiHelper().fetchUser(id, callback);
	}

	fetchMe() {
		const id = this.props.myId;
		const socketId = this.props.mySocketId;
		const self = this;
		this.fetchUser(id, function (result) {
			self.setState({
				me: {
					id: id,
					socketId: socketId,
					name: result.user.name
				}
			});
		});
	}

	handleLocalStream(stream) {
		this.setState({localStream: stream});
		if (!!stream || !this.state.me) return;
		const me = Object.assign({}, this.state.me);
		me.muted = false;
		this.setState({me: me});
	}

	handleConnecting(connecting) {
		this.setState({connecting: connecting});
	}

	handleParticipantStatus(status, key) {
		if (!this.state.me) return;
		if (status.socketId === this.state.me.socketId) {
			const me = Object.assign({}, this.state.me);
			me[key] = status[key];
			this.setState({me: me});
		} else {
			const otherParticipants = this.getOtherParticipantsCopy();
			if (!otherParticipants[status.socketId]) return;
			otherParticipants[status.socketId][key] = status[key];
			this.setState({otherParticipants: otherParticipants});
		}
	}

	handleParticipantMute(muteState) {
		this.handleParticipantStatus(muteState, "muted");
	}

	handleParticipantSpeaking(voiceState) {
		this.handleParticipantStatus(voiceState, "speaking");
	}

	handleWelcomeParticipant(socketId, participant) {
		const id = participant.userId;
		const self = this;
		this.fetchUser(id, function (result) {
			const newOtherParticipants = self.getOtherParticipantsCopy();
			const user = result.user;
			newOtherParticipants[socketId] = {id: id, name: user.name, muted: participant.muted};
			self.setState({otherParticipants: newOtherParticipants});
		});
	}

	handleFarewellParticipant(socketId) {
		const newOtherParticipants = this.getOtherParticipantsCopy();
		delete newOtherParticipants[socketId];
		this.setState({otherParticipants: newOtherParticipants});
	}

	getOtherParticipantsCopy() {
		return Object.assign({}, this.state.otherParticipants);
	}

	render() {
		return (
			<Container className="chatParticipantContainer">
				{!!this.props.table && <ChatParticipantRenderer
					tableLength={this.props.table.length}
					me={this.state.me}
					others={this.state.otherParticipants}
					connecting={this.state.connecting}
				/>}
				<ChatButtonComponent
					localStream={this.state.localStream}
					onMute={this.handleParticipantMute}
					onLeave={this.props.onLeave}
				/>
				<ChatVoiceComponent
					onSpeaking={this.handleParticipantSpeaking}
				/>
				<ChatStreamComponent
					onWelcomeParticipant={this.handleWelcomeParticipant}
					onFarewellParticipant={this.handleFarewellParticipant}
					onConnecting={this.handleConnecting}
					onLocalStream={this.handleLocalStream}
					room={this.props.table}/>
				{!!this.state.me && <ChatLeavePrompt
					myName={this.state.me.name}
				/>}
			</Container>
		)
	}
}

ChatParticipantComponent.propTypes = {
	/** The socket.io room object indicating the current chat room of the client. */
	table: PropTypes.shape({
		/** The participants of the room. Each entry maps from the socketId to the participant's userId. */
		participants: PropTypes.object.isRequired,
	}),
	/** The userId of the current client. */
	myId: PropTypes.string,
	/** The socketId of the current client. */
	mySocketId: PropTypes.string,
	/** Reference to function initiating leave logic. */
	onLeave: PropTypes.func.isRequired
}
