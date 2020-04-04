import React, {Component} from "react";
import {socket} from "../../../../App";
import {withRouter} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import ChatDonationContainer from "./donation/ChatDonationContainer";
import RightSideActionComponent from "../../rightside/RightSideActionComponent";
import ChatTableDescriptionRenderer from "./ChatTableDescriptionRenderer";
import ChatParticipantComponent from "./participant/ChatParticipantComponent";

/**
 * Stateful component wrapping the logic and renderers of the chat room
 * the user is currently in. This component gets the information of the
 * room to be rendered by API and web socket requests which is why no
 * dedicated props have to be passed to it.
 */
class ChatRoomDetailContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tables: null,
			myTable: null,
			myTableId: null,
			localStream: null,
			mySocketId: null,
			myId: null
		}
		this.fetchBusiness = this.fetchBusiness.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('joinedTable', function (data) {
			self.setState({
				myTable: data.tables[data.tableId],
				myTableId: data.tableId,
				mySocketId: socket.id,
				myId: data.myId
			});
		});

		socket.on('leftTable', function () {
			self.goBack();
		});

		socket.on('updateTables', function (data) {
			self.setState({myTable: data[self.state.myTableId]})
		});

		socket.on('tableException', function (data) {
			console.debug(data);
			self.goBack(self);
		});


		const tableId = this.props.match.params.table;
		const companyId = this.props.match.params.id;
		socket.emit('joinTable', {tableId: tableId, companyId: companyId});

		this.fetchBusiness()
	}

	fetchBusiness() {
		const {id} = this.props.match.params;
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include"
		}).then(res => {
			return res.json()
		}).then(res => {
			this.setState({company: res});
		});
	}

	goBack() {
		this.props.history.push(window.location.pathname.split("/").slice(0, -2).join("/"));
	}

	componentWillUnmount() {
		console.debug("Will unmount");
		socket.emit('leaveTable');
		socket.off('joinedTable');
		socket.off('leftTable');
		socket.off('updateTables');
		socket.off('tableException');
		console.debug("Done");
	}

	render() {
		return (
			<div>
				<RightSideActionComponent renderBack={true} backSteps={2}/>
				<Container className="chatDetailContainer">
					{!!this.state.myTable && <ChatTableDescriptionRenderer
						prefixName={this.state.myTable.prefixName}/>}
					<ChatParticipantComponent
						myId={this.state.myId}
						mySocketId={this.state.mySocketId}
						table={this.state.myTable}/>
					{!!this.state.company && <ChatDonationContainer
						company={this.state.company}/>}
				</Container>
			</div>
		)
	}
}

export default withRouter(ChatRoomDetailContainer)
