import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import LoginContainer from "../login/LoginContainer";


export default class LoginDropDown extends Component {

	render() {
		return (
			<NavDropdown
				alignRight title={
				<>
					<div className={"navLink login"}>Login</div>
					<Navbar.Brand className="profileImage">
						<img
							src={"/assets/icons/ohne-profilbild.svg"}
							width="54px"
							height="54px"
							className="d-inline-block align-center rounded-circle"
							alt="Login"
						/>
					</Navbar.Brand>
				</>
			} id="collasible-nav-dropdown">
				<LoginContainer/>
			</NavDropdown>
		)
	}
}
