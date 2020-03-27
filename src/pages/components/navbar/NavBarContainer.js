import React, {Component} from 'react';
import LandingPageNavBar from "./LandingPageNavBar";
import MainNavBar from "./MainNavBar";

import '../../css/navbar/navBarContainer.css';

export default class NavBarContainer extends Component {

    render() {
        if(!this.props.isLoggedIn) {
            return <LandingPageNavBar/>;
        } else {
            return <MainNavBar/>
        }
    }
}



