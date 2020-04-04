import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {socket} from "../../../../App";
import ChatRoomsRenderer from "./ChatRoomsRenderer";

/**
 * Stateful component incorporating logic handling the currently open tables
 * of the current company as well as opening new tables.
 */
class ChatRoomsComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {tables: null};
		this.onJoinTable = this.onJoinTable.bind(this);
		this.onAddTable = this.onAddTable.bind(this);
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
			self.onJoinTable(data.tableId);
		});
		socket.on('leftTable', function (data) {
			self.setState({tables: data});
		});
		const companyId = this.props.match.params.id;
		socket.emit('requestTables', {companyId: companyId});
	}

	onJoinTable(tableId) {
		console.log("Join Table");
		this.props.history.push(window.location.pathname + '/table/' + tableId);
	}

	onAddTable() {
		console.log("Add Table");
		const companyId = this.props.match.params.id;
		socket.emit('addTable', {companyId: companyId});
	}

	componentWillUnmount() {
		socket.off('tableException');
		socket.off('updateTables');
		socket.off('leftTable');
		socket.off('addedTable')
	}


	render() {
		return (
			<div>
				{!!this.state.tables && <ChatRoomsRenderer
					tables={this.state.tables}
					handleJoinTable={this.onJoinTable}
					handleAddTable={this.onAddTable}
				/>}
			</div>
		)
	}
}

export default withRouter(ChatRoomsComponent);
