import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProfileDropDown from "./ProfileDropDown";
import AboutContainer from "./AboutContainer";


export default class MainNavBar extends Component {

	render() {
		return (
			<Navbar collapseOnSelect className="mainNavBar">
				<Navbar.Brand href="/" className="brandImage"/>
				<Navbar.Toggle/>
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav className={"mainNav"}>
						<AboutContainer/>
						<ProfileDropDown/>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
