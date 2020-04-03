import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import '../../css/chat/chatContainer.css'
import Container from "react-bootstrap/Container";
import {socket} from "../../../App";
import TableComponent from "./TableComponent";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class ChatRoomContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.joinTable = this.joinTable.bind(this);
		this.renderTables = this.renderTables.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('tableException', console.debug);
		socket.on('updateTables', function (data) {
			const companyId = self.props.match.params.id;
			const filteredTables = Object.keys(data).reduce((r, e) => {
				if (companyId === data[e].companyId) r[e] = data[e];
				return r;
			}, {});
			self.setState({tables: filteredTables});
		});
		socket.on('addedTable', function (data) {
			self.joinTable(data.tableId);
		});
		socket.on('leftTable', function (data) {
			self.setState({tables: data});
		});
		const companyId = this.props.match.params.id;
		socket.emit('requestTables', {companyId: companyId});
	}

	joinTable(id) {
		this.props.history.push(window.location.pathname + '/table/' + id);
	}

	addTable = () => {
		const companyId = this.props.match.params.id;
		socket.emit('addTable', {companyId: companyId});
	}

	componentWillUnmount() {
		socket.off('tableException');
		socket.off('updateTables');
		socket.off('addedTable');
		socket.off('leftTable');
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
		return (
			<Container style={{padding: 0}}>
				{result.map((row, i) => (
					<Row key={i}>
						{row.map((table, j) => (
							<TableComponent
								key={table[0]}
								tablePrefixName={table[1].prefixName}
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
				<h5>Tische</h5>
				{!!this.state.tables && this.renderTables()}
				<div className="chatBlockButtonWrapper">
					{!!this.state.tables && Object.keys(this.state.tables).length < 8 ?
						<Button className="chatButton chatBlockButton" onClick={this.addTable}>
							Tisch hinzufügen
						</Button> :
						<Button disabled className="chatButton chatBlockButton">
							Keine weiteren Tische
						</Button>
					}
				</div>
			</Container>
		)
	}
}

export default withRouter(ChatRoomContainer)
