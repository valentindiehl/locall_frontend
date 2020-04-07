import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

/**
 * Stateless component rendering an add table button.
 */
const AddTableButton = (props) => {
	return (
		<div className="chatBlockButtonWrapper">
			<Button disabled={!props.enabled} className="chatButton chatBlockButton" onClick={props.handleClick}>
				{props.enabled ? "Tisch hinzufügen" : "Keine weiteren Tische"}
			</Button>
		</div>)
}

AddTableButton.propTypes = {
	/** Flag indicating whether tables can be added currently. */
	enabled: PropTypes.bool.isRequired,
	/** Click handler for the button initiating the process of adding a table. */
	handleClick: PropTypes.func.isRequired
}

/**
 * Component handling the logic of adding a table.
 */
export default class AddTableComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const enabled = Object.values(this.props.tables).length < 8;
		return <AddTableButton enabled={enabled} handleClick={this.props.handleAddTable}/>
	}
}

AddTableComponent.propTypes = {
	/** An object mapping from a table/room id to the respective socket.io room object. */
	tables: PropTypes.object.isRequired,
	/** Reference to function initiating the process of adding a table. */
	handleAddTable: PropTypes.func.isRequired
}
