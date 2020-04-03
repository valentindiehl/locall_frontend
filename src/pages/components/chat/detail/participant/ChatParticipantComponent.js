import React, {Component} from 'react';
import ChatParticipantRenderer from "./ChatParticipantRenderer";
import ChatVoiceComponent from "./stream/ChatVoiceComponent";
import ChatStreamComponent from "./stream/ChatStreamComponent";
import Container from "react-bootstrap/Container";
import ChatButtonComponent from "./button/ChatButtonComponent";

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
		fetch(process.env.REACT_APP_API_URL + "/api/users/" + id, {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include",
		}).then(res => {
			return res.json()
		}).then(res => {
			callback(res.user);
		});
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
					name: result.name
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
			newOtherParticipants[socketId] = {id: id, name: result.name, muted: participant.muted};
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
			</Container>
		)
	}
}
