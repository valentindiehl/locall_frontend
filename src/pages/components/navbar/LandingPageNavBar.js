import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SocialLinks from "../footer/SocialLinks";
import LoginDropDown from "./LoginDropDown";

import '../../css/navbar/landingPageNavBar.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import AboutContainer from "./AboutContainer";


export default class LandingPageNavBar extends Component {

	render() {
		return <Navbar collapseOnSelect className="landingPageNavBar">
			<Navbar.Brand href="/" className="brandImage"/>
			<Navbar.Toggle/>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav>
					<AboutContainer/>
					<LoginDropDown/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>;
	}
}
