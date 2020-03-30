import React, {Component} from "react";
import {socket} from "../../../App";
import StreamContainer from "./StreamContainer";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import Button from "react-bootstrap/Button";
import DonationContentContainer from "../donation/DonationContentContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class ChatRoomDetailContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {tables: null, myTable: null, myTableId: null, me: null, otherParticipants: {}}
		this.fetchBusiness = this.fetchBusiness.bind(this);
		this.handleWelcomeParticipant = this.handleWelcomeParticipant.bind(this);
		this.handleFarewellParticipant = this.handleFarewellParticipant.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('joinedTable', function (data) {
			self.setState({myTable: data.tables[data.tableId], myTableId: data.tableId});
			self.fetchMe(data.myId);
		});

		socket.on('leftTable', function (data) {
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
		const companyId = this.props.match.params.id;
		socket.emit('joinTable', {tableId: tableId, companyId: companyId});

		// TODO: Confirmation before leaving
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

	fetchMe(id) {
		const self = this;
		this.fetchUser(id, function (result) {
			self.setState({me: result});
		});
	}

	fetchUser(id, callback) {
		fetch(process.env.REACT_APP_API_URL + "/api/users/profile/", {
			headers: {
				'content-type': 'application/json'
			},
			credentials: "include",
			id: id
		}).then(res => {
			return res.json()
		}).then(res => {
			callback(res.user);
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

	handleWelcomeParticipant(id) {
		const self = this;
		this.fetchUser(id, function (result) {
			const prevOtherParticipants = self.state.otherParticipants;
			const newOtherParticipants = Object.assign({}, prevOtherParticipants)
			newOtherParticipants[id] = result;
			self.setState({otherParticipants: newOtherParticipants});
		});
	}

	handleFarewellParticipant(id) {
		const prevOtherParticipants = this.state.otherParticipants;
		const newOtherParticipants = Object.assign({}, prevOtherParticipants)
		delete newOtherParticipants[id];
		this.setState({otherParticipants: newOtherParticipants});
	}

	renderMe() {
		if (!this.state.me) return <div>Loading</div>;
		return (
			<Row className={"participantRow"}>
				<Col sm={2} className={"participantImg"}>
					<img alt={"Avatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
				</Col>
				<Col sm={10} style={{fontWeight: "bold"}} className={"participantName"}>{this.state.me.name} (Du)</Col>
			</Row>
		)
	}

	renderParticipants() {
		const otherParticipants = Object.values(this.state.otherParticipants);
		if (otherParticipants.length === 0) return null;
		return (
			otherParticipants.map((person, index) => {
				return (
					<Row key={index} className={"participantRow"}>
						<Col sm={2} className={"participantImg"}>
							<img alt={"Avatar"} src={"/assets/icons/profilbild-profilbild-gelb.svg"}/>
						</Col>
						<Col sm={10} className={"participantName"}>{person.name}</Col>
					</Row>
				)
			})
		)
	}

	render() {
		return (
			<div>
				<RightSideActionComponent renderBack={true} backSteps={2}/>
				<Container className="chatDetailContainer">
					<p className={"describer"}>Dein Tisch</p>
					{!!this.state.myTable &&
					<h1>{this.state.myTable.prefixName}<span style={{fontWeight: "900"}}>tisch</span></h1>}
					<Container className="chatParticipantContainer">
						<div className="participantCount">
							{!!this.state.myTable && String(this.state.myTable.length)}&nbsp;
							{!!this.state.myTable && this.state.myTable.length === 1 ? "Person" : "Personen"}
						</div>
						{this.renderMe()}
						{this.renderParticipants()}
						<div className="chatBlockButtonWrapper">
							<Button onClick={this.leave} className="chatButton chatBlockButton">
								Verlassen
							</Button>
						</div>
					</Container>

					<Container className="chatDonateContainer">
						{!!this.state.company && <h6>{this.state.company.name}</h6>}
						{this.state.company &&
						<DonationContentContainer titleMessage={"Spenden"}
												  paypal={this.state.company.paypal}/>}
					</Container>
					<StreamContainer onWelcomeParticipant={this.handleWelcomeParticipant}
									 onFarewellParticipant={this.handleFarewellParticipant} room={this.state.myTable}/>
				</Container>
			</div>
		)
	}
}

export default withRouter(ChatRoomDetailContainer)
