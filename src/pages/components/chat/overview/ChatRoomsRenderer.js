import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TableRenderer from "./TableRenderer";
import * as PropTypes from 'prop-types';
import AddTableComponent from "./AddTableComponent";

/**
 * Component responsible for rendering the chat rooms currently
 * available for the selected company.
 */
export default class ChatRoomsRenderer extends Component {

	renderTables() {
		const tableEntries = Object.entries(this.props.tables);
		if (!tableEntries.length) return this.renderEmpty();
		const result = [];
		for (let i = 0; i < tableEntries.length - 1; i += 2) {
			result.push([tableEntries[i], tableEntries[i + 1]]);
		}
		if (tableEntries.length % 2 !== 0) {
			result.push([tableEntries[tableEntries.length - 1]]);
		}
		return (
			<Container style={{padding: 0}}>
				{result.map((row, i) => (
					<Row key={i}>
						{row.map((table) => (
							<TableRenderer
								key={table[0]}
								tablePrefixName={table[1].prefixName}
								tableId={table[0]}
								participants={table[1].length}
								handleJoinTable={this.props.handleJoinTable}
							/>
						))}
					</Row>
				))}
			</Container>
		)
	}

	renderEmpty() {
		return <p>Hier gibt es noch keine Tische.</p>
	}

	renderDescription() {
		return (
			<div>
				<p>Hier kannst du dich virtuell mit deinen Freunden treffen, oder dich einfach zu jemandem an den Tisch
					setzen.</p>
				<h5>Tische</h5>
			</div>
		);
	}

	render() {
		return (
			<Container className="chatRoomContainer">
				{this.renderDescription()}
				{this.renderTables()}
				<AddTableComponent
					tables={this.props.tables}
					handleAddTable={this.props.handleAddTable}
				/>
			</Container>
		);
	}
}

ChatRoomsRenderer.propTypes = {
	/** An object mapping from a table/room id to the respective socket.io room object. */
	tables: PropTypes.object.isRequired,
	/** Reference to function initiating the process of joining a table. */
	handleJoinTable: PropTypes.func.isRequired,
	/** Reference to function initiating the process of adding a table. */
	handleAddTable: PropTypes.func.isRequired
}
