import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

/**
 * Stateless component rendering a leave button.
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
		this.props.onLeave();
	}

	render() {
		return <LeaveButton handleLeave={this.handleLeave}/>
	}
}

LeaveComponent.propTypes = {
	/** Handler function this component is relayed to. */
	onLeave: PropTypes.func.isRequired
}
