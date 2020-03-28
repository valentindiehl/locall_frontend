import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import CompanyContainer from "../details/CompanyContainer";
import ChatContainer from "../chat/ChatContainer";
import DonationContainer from "../donation/DonationContainer";
import {Route} from 'react-router-dom';


import '../../css/rightside/rightSideContainer.css';

export default class RightSideComponent extends Component {
	render() {
		return (
			<Container fluid className="rightSideContainer">
				<Route path={'/app/company/:id'} component={CompanyContainer}/>
				<Route path={'/app/company/:id/chat'} component={ChatContainer}/>
				<Route path={'/app/company/:id/donate'} component={DonationContainer}/>
			</Container>
		);
	}
}
