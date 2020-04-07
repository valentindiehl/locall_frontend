import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Spinner} from "react-bootstrap";
import PropTypes from 'prop-types';

/**
 * Stateless component responsible for rendering the current
 * participants of a chat room.
 */
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
		if (this.props.connecting) return this.renderSpinnerRow("Verbindung wird hergestellt ...");
		const otherParticipants = Object.values(this.props.others);
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

ChatParticipantRenderer.propTypes = {
	/** The current number of participants in the chat room. */
	tableLength: PropTypes.number.isRequired,
	/** An object holding information about this client. */
	me: PropTypes.shape({
		/** The socketId of this client. */
		socketId: PropTypes.string.isRequired
	}),
	/** An object holding information about the other participants.
	 * It maps from a socketId to an object holding the user's userId and the user's name. */
	others: PropTypes.object.isRequired,
	/** Flag indicating whether a connection process is currently ongoing. */
	connecting: PropTypes.bool.isRequired
}
