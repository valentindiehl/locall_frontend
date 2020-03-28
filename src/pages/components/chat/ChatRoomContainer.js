import React, {Component} from "react";

import '../../css/chat/chatContainer.css'
import Container from "react-bootstrap/Container";
import {socket} from "../../../App";
import TableComponent from "./TableComponent";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class ChatRoomContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.joinTable = this.joinTable.bind(this);
		this.renderTables = this.renderTables.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('tableException', console.log);
		socket.on('updateTables', function (data) {
			self.setState({tables: data})
		});
		socket.on('joinedTable', function (data) {
			console.log("Joined table!", data);
			// TODO: Push history instead
			self.setState({tables: data.tables, myTable: data.tableId});
		});
		socket.on('leftTable', function (data) {
			self.setState({tables: data, myTable: null});
		});
		socket.emit('requestTables');
	}

	joinTable(id) {
		socket.emit('joinTable', {tableId: id});
	}

	addTable = () => {
		socket.emit('addTable');
	}


	renderTables() {
		const tableEntries = Object.entries(Object.assign({}, this.state.tables));
		const result = [];
		for (let i = 0; i < tableEntries.length - 1; i += 2) {
			result.push([tableEntries[i], tableEntries[i + 1]]);
		}
		if (tableEntries.length % 2 !== 0) {
			result.push([tableEntries[tableEntries.length - 1]]);
		}
		console.log(result);
		return (
			<Container style={{padding: 0}}>
				{result.map((row, i) => (
					<Row key={i}>
						{row.map((table, j) => (
							<TableComponent
								key={table[0]}
								tableName={"Tisch " + table[1].nickName}
								tableId={table[0]}
								participants={table[1].length}
								join={this.joinTable}
							/>
						))}
					</Row>
				))}
			</Container>
		)
	}


	render() {
		return (
			<Container className="chatRoomContainer">
				<p>Hier kannst du dich virtuell mit deinen Freunden treffen, oder dich einfach zu jemandem an den Tisch
					setzen.</p>
				<h5>Freie Tische</h5>
				{!!this.state.tables && this.renderTables()}
				<div className="addTableButtonWrapper">
					<Button className="tableButton addTableButton" onClick={this.addTable}>
						Tisch hinzufügen
					</Button>
				</div>
			</Container>
		)
	}
}
