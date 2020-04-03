import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Spinner} from "react-bootstrap";


export default class ChatParticipantRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderMe = this.renderMe.bind(this);
		this.renderOthers = this.renderOthers.bind(this);
	}

	renderParticipantRow(participant, fontWeight, index, extraDescription) {
		const voiceIcon = participant.muted ? <div className={"voiceIcon muted"}/>
			: participant.speaking ? <div className={"voiceIcon speaking"}/> : null;
		return (
			<Row key={index} className={"participantRow"}>
				<Col sm={2} className={"participantImg"}>
					<img alt={"Avatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
				</Col>
				<Col sm={8} style={{fontWeight: fontWeight}}
					 className={"participantName"}>{participant.name} {extraDescription}</Col>
				<Col sm={2} className={"participantVoiceStatus"}>
					{voiceIcon}
				</Col>
			</Row>
		)
	}

	renderSpinnerRow(text) {
		return (
			<Row className={"participantRow"}>
				<Col className={"connectionSpinner"}>
					<Spinner size="sm" animation="grow"/>{text}
				</Col>
			</Row>);
	}

	renderAloneRow() {
		return <Row className={"participantRow"}><Col className={"aloneWrapper"}>Du bist noch alleine hier
			💔</Col></Row>;
	}

	renderMe() {
		const me = this.props.me;
		if (!me) return this.renderSpinnerRow("Laden ...");
		return this.renderParticipantRow(me, "bold", me.socketId, "(Du)");
	}

	renderOthers() {
		const otherParticipants = Object.values(this.props.others);
		if (this.props.connecting) return this.renderSpinnerRow("Verbindung wird hergestellt ...");
		if (otherParticipants.length === 0) return this.renderAloneRow();
		return (
			otherParticipants.map((person, index) => {
				return this.renderParticipantRow(person, "normal", index);
			})
		)
	}

	render() {
		let tableLength = this.props.tableLength;
		return (
			<div>
				<div className="participantCount">
					{tableLength}&nbsp;
					{tableLength === 1 ? "Person" : "Personen"}
				</div>
				{this.renderMe()}
				{this.renderOthers()}
			</div>
		)
	}
}
