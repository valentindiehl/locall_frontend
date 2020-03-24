// A cafe holds several tables (i.e. chatrooms)

import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import TableComponent from "./TableComponent";
import StreamContainer from "./StreamContainer";
import '../css/cafe.css';
import {v4 as uuidv4} from 'uuid';
import {socket} from "../../App";
import AddTableButton from "./AddTableButton";

export default class CafeComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {tables: {}}
		this.joinTable = this.joinTable.bind(this)
	}

	componentDidMount() {
		const self = this;
		socket.on('updateRooms', function (rooms) {
			console.log("Updating Rooms!");
			self.setState({tables: rooms})
		});
		socket.emit('requestRooms');
		console.log("Requested Rooms!");
	}


	joinTable(id) {
		console.log("Cafe wants to join table", id);
		if (!!this.streamContainer) {
			this.streamContainer.join(id)
		}
	}

	addTable = () => {
		let newId = uuidv4();
		this.joinTable(newId);
	}

	renderTables() {
		return Object.entries(this.state.tables).map((t, i) => {
			const tableId = t[0]
			const table = t[1];
			return (
				<TableComponent
					key={tableId}
					tableName={"Tisch " + (i + 1)}
					tableId={tableId}
					participants={table.length}
					join={this.joinTable}
				/>
			)
		});
	}

	render() {
		return (
			<Container>
				<h1>MainCafé</h1>
				<Container className="tableContainer">
					<Container id="tables"/>
					{this.renderTables()}
					<AddTableButton key={"add-table"} addTable={this.addTable}/>
					<StreamContainer updateCount={this.updateTableCount}
									 socket={this.socket}
									 ref={streamContainer => {
										 this.streamContainer = streamContainer;
									 }}
					/>
				</Container>
			</Container>
		);
	}

}
