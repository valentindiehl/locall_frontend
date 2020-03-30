import React, {Component} from "react";
import {Route} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import CompanyContainer from "../details/CompanyContainer";
import ChatContainer from "../chat/ChatContainer";
import DonationContainer from "../donation/DonationContainer";
import ChatRoomDetailContainer from "../chat/ChatRoomDetailContainer";


import '../../css/rightside/rightSideContainer.css';

export default class RightSideComponent extends Component {
	render() {
		return (
			<Container fluid className="rightSideContainer">
				<Route exact path={'/app/company/:id'} component={CompanyContainer}/>
				<Route exact path={'/app/company/:id/chat'} component={ChatContainer}/>
				<Route path={'/app/company/:id/chat/table/:table'} component={ChatRoomDetailContainer}/>
				<Route exact path={'/app/company/:id/donate'} component={DonationContainer}/>
			</Container>
		);
	}
}
