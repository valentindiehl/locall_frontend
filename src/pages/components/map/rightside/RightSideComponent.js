import React, {Component} from "react";
import {Route} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import CompanyContainer from "../details/CompanyContainer";
import ChatOverviewPanelComponent from "../chat/overview/ChatOverviewComponent";
import DonationContainer from "../donation/DonationContainer";
import ChatRoomDetailContainer from "../chat/detail/ChatRoomDetailContainer";
import {connect} from "react-redux";
import '../../../css/rightside/rightSideContainer.css';
import {Redirect} from "react-router";

function mapStateToProps(state) {
	return {
		isLoggedIn: state.user.isLoggedIn
	}
}

class RightSideComponent extends Component {
	render() {
		return (
			<Container fluid className="rightSideContainer">
				<Route exact path={'/app/company/:id'}
					   render={(props) => <CompanyContainer {...props} deselect={this.props.deselect}
															select={this.props.select} data={this.props.data}/>}/>
				<Route exact path={'/app/company/:id/chat'}
					   render={(props) => !this.props.isLoggedIn ? <Redirect to="/register"/> :
						   <ChatOverviewPanelComponent {...props} select={this.props.select}
													   data={this.props.data}/>}/>
				<Route path={'/app/company/:id/chat/table/:table'}
					   render={() => !this.props.isLoggedIn ? <Redirect to="/register"/> :
						   <ChatRoomDetailContainer/>}/>
				<Route exact path={'/app/company/:id/donate'}
					   render={(props) => <DonationContainer {...props} select={this.props.select}
															 data={this.props.data}/>}/>
			</Container>
		);
	}
}

export default connect(mapStateToProps)(RightSideComponent)

