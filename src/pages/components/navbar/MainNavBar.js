import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import SocialPointsNavBarContainer from "./SocialPointsNavBarContainer";
import Nav from "react-bootstrap/Nav";
import ProfileDropDown from "./ProfileDropDown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import '../../css/navbar/mainNavBar.css';


export default class MainNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="mainNavBar">
                <Navbar.Brand href="#home" className="brandImage">
                    <img
                        src="/assets/icons/logo-locall.svg"
                        width="170px"
                        height="auto"
                        className="d-inline-block align-center"
                        alt="Locall Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <SocialPointsNavBarContainer/>
                        <ProfileDropDown/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
