import React, {Component} from 'react';
import LandingPageNavBar from "./LandingPageNavBar";
import MainNavBar from "./MainNavBar";

import '../../css/navbar/navBarContainer.css';

export default class NavBarContainer extends Component {

    render() {
        if (!this.props.navbar.isLoggedIn) {
            return <LandingPageNavBar hideLogin={this.props.navbar.hideLogin}/>;
        } else {
            return <MainNavBar/>
        }
    }
}



