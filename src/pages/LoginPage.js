import React from "react";
import LoginContainer from "./components/login/LoginContainer";


export default class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			navbar: {
				hideLogin: false,
				isLoggedIn: false
			}
		}
	}

	render() {
		return (
			<div style={{minHeight: "100vh"}} className="Fade">
				<LoginContainer/>
			</div>
		);
	}
}
