import React, {Component} from "react";
import {socket} from "../../../App";
import StreamContainer from "./StreamContainer";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import Button from "react-bootstrap/Button";

class ChatRoomDetailContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {tables: null, myTable: null, myTableId: null}
		this.fetchBusiness = this.fetchBusiness.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('joinedTable', function (data) {
			console.log("Joined table!", data);
			self.setState({myTable: data.tables[data.tableId], myTableId: data.tableId});
		});

		socket.on('leftTable', function (data) {
			console.log("Left table", data);
			self.goBack();
		});

		socket.on('updateTables', function (data) {
			self.setState({myTable: data[self.state.myTableId]})
		});

		socket.on('tableException', function (data) {
			console.log(data);
			self.goBack(self);
		});


		const tableId = this.props.match.params.table;
		socket.emit('joinTable', {tableId: tableId});

		// TODO: Confirmation before leaving
		this.fetchBusiness()
	}

	fetchBusiness() {
		const {id} = this.props.match.params;
		fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
			headers: {
				'content-type': 'application/json'
			}
		}).then(res => {
			return res.json()
		}).then(res => {

			this.setState({company: res});
		});
	}

	leave() {
		socket.emit('leaveTable');
	}

	goBack() {
		this.props.history.push(window.location.pathname.split("/").slice(0, -2).join("/"));
	}

	componentWillUnmount() {
		console.log("Will unmount");
		socket.emit('leaveTable');
		socket.off('joinedTable');
		socket.off('leftTable');
		socket.off('updateTables');
		socket.off('tableException');
		console.log("Done");
	}

	renderParticipants() {
		return (
			<div>TODO</div>
		)
	}

	render() {
		return (
			<div>
				<RightSideActionComponent renderBack={true} backSteps={2}/>
				<Container className="chatDetailContainer">
					<h1>Aktueller Tisch</h1>
					{!!this.state.company && <h6>{this.state.company.name}</h6>}
					<Container className="chatParticipantContainer">
						<div className="participantCount">
							{!!this.state.myTable && this.state.myTable.length}&nbsp;
							{!!this.state.myTable && this.state.myTable.length === 1 ? "Person" : "Personen"}
						</div>
						{this.renderParticipants()}
						<div className="chatBlockButtonWrapper">
							<Button onClick={this.leave} className="chatButton chatBlockButton">
								Verlassen
							</Button>
						</div>
					</Container>
					{!!this.state.company && <h3>{this.state.company.name} unterstützen</h3>}
					<Container className="chatDonateContainer">
						TODO: Embed Tabeas Container
					</Container>
					<StreamContainer room={this.state.myTable}/>
				</Container>
			</div>
		)
	}
}

export default withRouter(ChatRoomDetailContainer)
