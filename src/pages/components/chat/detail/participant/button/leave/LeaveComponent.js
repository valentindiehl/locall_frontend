import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {socket} from "../../../../../../../App";
import PropTypes from 'prop-types';

/**
 * Stateless component rendering a leave button.
 * @param props has to contain a reference to a function `onLeave.
 * @returns {*}
 */
const LeaveButton = (props) => {
	return (
		<div className="chatBlockButtonWrapper">
			<Button onClick={props.handleLeave} className="chatButton chatBlockButton">
				Verlassen
			</Button>
		</div>
	)
}

LeaveButton.propTypes = {
	/** Handler function when the button is clicked. */
	handleLeave: PropTypes.func.isRequired
}

/**
 * Component handling the logic of leaving a chat room.
 */
export default class LeaveComponent extends Component {

	constructor(props) {
		super(props);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleLeave() {
		socket.emit('leaveTable');
	}

	render() {
		return <LeaveButton handleLeave={this.handleLeave}/>
	}
}
