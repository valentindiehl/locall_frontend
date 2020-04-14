import React, {Component} from 'react';
import LandingPageNavBar from "./LandingPageNavBar";
import MainNavBar from "./MainNavBar";
import {connect} from "react-redux";

import '../../css/navbar/navBarContainer.css';
import {fetchAuth} from "../../../redux/actions/userActions";

function mapStateToProps(state) {
	return {
		fetching: state.user.authFetching,
		fetched: state.user.authFetched,
		isLoggedIn: state.user.isLoggedIn,
		userData: state.user.userData,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchAuth: () => dispatch(fetchAuth()),
	}
};

class NavBarContainer extends Component {

	componentDidMount() {
		console.log(this.props);
	}


	render() {
		return (
			<div>
				{this.props.isLoggedIn && <MainNavBar userData={this.props.userData}/>}
				{!this.props.isLoggedIn && <LandingPageNavBar/>}
			</div>
		);
	}
}

const NavBarContainerConnected = connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
export default NavBarContainerConnected;
