import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProfileDropDown from "./ProfileDropDown";


export default class MainNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="mainNavBar">
                <Navbar.Brand href="" className="brandImage">
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
                        <ProfileDropDown history={this.props.history}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
