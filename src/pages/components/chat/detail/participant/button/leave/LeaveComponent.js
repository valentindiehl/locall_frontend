import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {socket} from "../../../../../../../App";

const LeaveButton = (props) => {
	return (
		<div className="chatBlockButtonWrapper">
			<Button onClick={props.onLeave} className="chatButton chatBlockButton">
				Verlassen
			</Button>
		</div>
	)
}

export default class LeaveComponent extends Component {
	constructor(props) {
		super(props);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleLeave() {
		socket.emit('leaveTable');
	}

	render() {
		return <LeaveButton onLeave={this.handleLeave}/>
	}
}
