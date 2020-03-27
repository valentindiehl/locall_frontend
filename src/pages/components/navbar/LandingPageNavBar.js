import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SocialLinks from "../landingpage/SocialLinks";
import LoginDropDown from "./LoginDropDown";

import '../../css/navbar/landingPageNavBar.css';


export default class LandingPageNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: null
        }
    }

    componentWillMount() {
        let width = window.innerWidth;
        if (width <= 768) {
            this.setState({isHidden: true});
        } else {
            this.setState({isHidden: false});
        }
    }

    render() {
        let loginIcon;
        if (this.props.showLoginIcon) {
            loginIcon = <LoginDropDown/>;
        } else {
            loginIcon = null;
        }
        return <Navbar collapseOnSelect className="landingPageNavBar">
            <Navbar.Brand href="/" className="brandImage">
                <img
                    src="/assets/icons/logo-locall.svg"
                    width="170px"
                    height="auto"
                    className="d-inline-block align-center"
                    alt="Locall Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <SocialLinks isHidden={this.state.isHidden}/>
                    {loginIcon}
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }
}
