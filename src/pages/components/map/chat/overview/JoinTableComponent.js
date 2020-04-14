import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

/**
 * Stateless component rendering a join table button.
 */
const JoinTableButton = (props) => {
	return (
		<div className="chatBlockButtonWrapper">
			<Button disabled={!props.enabled} className="chatButton" onClick={props.handleClick}>
				{props.enabled ? "Betreten" : "Voll"}
			</Button>
		</div>)
}

JoinTableButton.propTypes = {
	/** Flag indicating whether this table can be joined. */
	enabled: PropTypes.bool.isRequired,
	/** Click handler for the button initiating the process of joining a table. */
	handleClick: PropTypes.func.isRequired
}

/**
 * Component handling the logic of joining a table.
 */
export default class JoinTableComponent extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleJoinTable(this.props.tableId);
	}

	render() {
		const enabled = this.props.participants < 8;
		return <JoinTableButton enabled={enabled} handleClick={this.handleClick}/>
	}
}

JoinTableComponent.propTypes = {
	/** The current number of participants. */
	participants: PropTypes.number.isRequired,
	/** The id of the table to join. */
	tableId: PropTypes.string.isRequired,
	/** Reference to function initiating the process of joining a table. */
	handleJoinTable: PropTypes.func.isRequired
}
