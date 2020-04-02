import React, {Component} from "react";
import {socket} from "../../../../App";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Spinner} from "react-bootstrap";
import ChatDonationContainer from "./donation/ChatDonationContainer";
import MuteContainer from "./button/mute/MuteContainer";
import RightSideActionComponent from "../../rightside/RightSideActionComponent";
import VoiceHandler from "./participant/stream/VoiceHandler";
import StreamContainer from "./participant/stream/StreamContainer";

class ChatRoomDetailContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tables: null,
			myTable: null,
			myTableId: null,
			me: null,
			otherParticipants: {},
			connecting: false,
			localStream: null
		}
		this.fetchBusiness = this.fetchBusiness.bind(this);
		this.handleWelcomeParticipant = this.handleWelcomeParticipant.bind(this);
		this.handleFarewellParticipant = this.handleFarewellParticipant.bind(this);
		this.handleConnecting = this.handleConnecting.bind(this);
		this.handleParticipantMute = this.handleParticipantMute.bind(this);
		this.handleParticipantSpeaking = this.handleParticipantSpeaking.bind(this);
		this.getOtherParticipantsCopy = this.getOtherParticipantsCopy.bind(this);
		this.handleLocalStream = this.handleLocalStream.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('joinedTable', function (data) {
			self.setState({myTable: data.tables[data.tableId], myTableId: data.tableId});
			self.fetchMe(socket.id, data.myId);
		});

		socket.on('leftTable', function (data) {
			self.goBack();
		});

		socket.on('updateTables', function (data) {
			self.setState({myTable: data[self.state.myTableId]})
		});

		socket.on('tableException', function (data) {
			console.debug(data);
			self.goBack(self);
		});


		const tableId = this.props.match.params.table;
		const companyId = this.props.match.params.id;
		socket.emit('joinTable', {tableId: tableId, companyId: companyId});

		// TODO: Confirmation before leaving
		this.fetchBusiness()
	}

	fetchBusiness() {
		const {id} = this.props.match.params;
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include"
		}).then(res => {
			return res.json()
		}).then(res => {
			this.setState({company: res});
		});
	}

	fetchMe(socketId, id) {
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

	leave() {
		socket.emit('leaveTable');
	}

	goBack() {
		this.props.history.push(window.location.pathname.split("/").slice(0, -2).join("/"));
	}

	componentWillUnmount() {
		console.debug("Will unmount");
		socket.emit('leaveTable');
		socket.off('joinedTable');
		socket.off('leftTable');
		socket.off('updateTables');
		socket.off('tableException');
		console.debug("Done");
	}

	getOtherParticipantsCopy() {
		return Object.assign({}, this.state.otherParticipants);
	}

	handleWelcomeParticipant(socketId, participant) {
		const id = participant.userId;
		console.debug("Welcoming", participant);
		const self = this;
		this.fetchUser(id, function (result) {
			console.debug("Adding", id, result);
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

	handleConnecting(connecting) {
		this.setState({connecting: connecting});
	}

	handleParticipantMute(muteState) {
		if (muteState.socketId === this.state.me.socketId) {
			const me = Object.assign({}, this.state.me);
			me.muted = muteState.muted;
			this.setState({me: me});
		} else {
			const newOtherParticipants = this.getOtherParticipantsCopy();
			newOtherParticipants[muteState.socketId].muted = muteState.muted;
			this.setState({otherParticipants: newOtherParticipants});
		}
	}

	handleParticipantSpeaking(voiceState) {
		if (!this.state.me) {
			console.debug("Me not defined");
			return;
		}
		if (voiceState.socketId === this.state.me.socketId) {
			const me = Object.assign({}, this.state.me);
			me.speaking = voiceState.speaking;
			this.setState({me: me});
		} else {
			const newOtherParticipants = this.getOtherParticipantsCopy();
			newOtherParticipants[voiceState.socketId].speaking = voiceState.speaking;
			this.setState({otherParticipants: newOtherParticipants});
		}
	}

	handleLocalStream(stream) {
		this.setState({localStream: stream});
	}

	renderMe() {
		if (!this.state.me) return <div>Loading</div>;
		const voiceIcon = this.state.me.muted ? <img src={"/assets/icons/microphone-slash.svg"} alt={"Muted"}/>
			: this.state.me.speaking ? <img src={"/assets/icons/talk.svg"} alt={"Speaking"}/> : null;
		return (
			<Row className={"participantRow"}>
				<Col sm={2} className={"participantImg"}>
					<img alt={"Avatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
				</Col>
				<Col sm={8} style={{fontWeight: "bold"}} className={"participantName"}>{this.state.me.name} (Du)</Col>
				<Col sm={2} className={"participantVoiceStatus"}>
					{voiceIcon}
				</Col>
			</Row>
		)
	}

	renderParticipants() {
		const otherParticipants = Object.values(this.state.otherParticipants);

		if (this.state.connecting) {
			return (
				<Row className={"participantRow"}>
					<Col className={"connectionSpinner"}>
						<Spinner size="sm" animation="grow"/> Verbindung wird hergestellt...
					</Col>
				</Row>);
		}
		if (otherParticipants.length === 0) {
			return <Row className={"participantRow"}><Col className={"aloneWrapper"}>Du bist noch alleine hier 💔</Col></Row>;
		}
		return (
			otherParticipants.map((person, index) => {
				const voiceIcon = person.muted ? <img src={"/assets/icons/microphone-slash.svg"} alt={"Muted"}/>
					: person.speaking ? <img src={"/assets/icons/talk.svg"} alt={"Speaking"}/> : null;
				return (
					<Row key={index} className={"participantRow"}>
						<Col sm={2} className={"participantImg"}>
							<img alt={"Avatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
						</Col>
						<Col sm={8} className={"participantName"}>{person.name}</Col>
						<Col sm={2} className={"participantVoiceStatus"}>
							{voiceIcon}
						</Col>
					</Row>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<RightSideActionComponent renderBack={true} backSteps={2}/>
				<Container className="chatDetailContainer">
					<p className={"describer"}>Dein Tisch</p>
					{!!this.state.myTable &&
					<h1>{this.state.myTable.prefixName}<span style={{fontWeight: "900"}}>tisch</span></h1>}
					<Container className="chatParticipantContainer">
						<div className="participantCount">
							{!!this.state.myTable && String(this.state.myTable.length)}&nbsp;
							{!!this.state.myTable && this.state.myTable.length === 1 ? "Person" : "Personen"}
						</div>
						{this.renderMe()}
						{this.renderParticipants()}
						<Container fluid>
							<Row>
								<Col style={{padding: 2}} md={5}>
									{!!this.state.localStream
									&& <MuteContainer localStream={this.state.localStream}
													  onParticipantMute={this.handleParticipantMute}/>}
								</Col>
								<Col style={{padding: 2}} md={7}>
									<div className="chatBlockButtonWrapper">
										<Button onClick={this.leave} className="chatButton chatBlockButton">
											Verlassen
										</Button>
									</div>
								</Col>
							</Row>
						</Container>
					</Container>

					{!!this.state.company && <ChatDonationContainer company={this.state.company}/>}
					<StreamContainer onWelcomeParticipant={this.handleWelcomeParticipant}
									 onFarewellParticipant={this.handleFarewellParticipant}
									 onConnecting={this.handleConnecting}
									 onLocalStream={this.handleLocalStream}
									 room={this.state.myTable}/>
					<VoiceHandler onSpeaking={this.handleParticipantSpeaking}/>
				</Container>
			</div>
		)
	}
}

export default withRouter(ChatRoomDetailContainer)
