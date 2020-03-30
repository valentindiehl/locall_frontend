// A table represents a chatroom

import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";

export default class TableComponent extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.join(this.props.tableId);
	}

	renderParticipants() {
		const persons = Array(this.props.participants).fill("");
		const renderPersons = persons.slice(0, 3)
		const excessNumber = persons.length - 3;
		return (
			<div>
				{this.renderParticipantAvatars(renderPersons)}
				{excessNumber > 0 && <span className="excessNumberParticipants">+{excessNumber}</span>}
			</div>

		)
	}

	renderParticipantAvatars(renderPersons) {
		return (
			renderPersons.map((person, i) => {
				return (
					<img key={i} alt="Avatar" className={"chatParticipantAvatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
				)
			})
		)
	}

	render() {
		return (
			<Col className='table'>
				<div className={"tableName"}>
					{this.props.tablePrefixName}<span style={{fontWeight: "bold"}}>tisch</span>
				</div>
				<div className="numberParticipants">
					{this.props.participants} {this.props.participants === 1 ? "Person" : "Personen"}
				</div>
				<Container className="participantContainer">
					{this.renderParticipants()}
				</Container>
				{this.props.participants < 8 ? <Button onClick={this.handleClick} className="chatButton">
					Betreten
				</Button> : <Button disabled className="chatButton">
					Voll
				</Button>}
			</Col>
		);
	}

}
