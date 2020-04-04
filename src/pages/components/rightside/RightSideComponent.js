import React, {Component} from "react";
import {Route} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import CompanyContainer from "../details/CompanyContainer";
import ChatOverviewPanelComponent from "../chat/overview/ChatOverviewComponent";
import DonationContainer from "../donation/DonationContainer";
import ChatRoomDetailContainer from "../chat/detail/ChatRoomDetailContainer";

import '../../css/rightside/rightSideContainer.css';

export default class RightSideComponent extends Component {
	render() {
		return (
			<Container fluid className="rightSideContainer">
				<Route exact path={'/app/company/:id'} component={CompanyContainer}/>
				<Route exact path={'/app/company/:id/chat'} component={ChatOverviewPanelComponent}/>
				<Route path={'/app/company/:id/chat/table/:table'} component={ChatRoomDetailContainer}/>
				<Route exact path={'/app/company/:id/donate'} component={DonationContainer}/>
			</Container>
		);
	}
}
