// A table represents a chatroom

import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";

export default class TableComponent extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			persons: {
				'a': 'b',
				'b': 'c'
			}
		};
	}

	handleClick() {
		this.props.join(this.props.tableId);
	}

	renderParticipants() {
		const persons = Object.values(this.state.persons);
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
					<img key={i} alt="Avatar" className={"chatParticipantAvatar"} src={"/assets/icons/valle.svg"}/>
				)
			})
		)
	}

	render() {
		return (
			<Col className='table'>
				<span className="numberParticipants">
					{this.props.participants} {this.props.participants === 1 ? "Person" : "Personen"}
				</span>
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
