import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import PasswordResetComponent from "./PasswordResetComponent";
import LoginFormComponent from "./LoginFormComponent";

import '../../css/login/loginContainer.css';


export default class LoginContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {passwordLost: false};
		this.handlePasswordLost = this.handlePasswordLost.bind(this);
		this.handleBackToLogin = this.handleBackToLogin.bind(this);
	}


	handlePasswordLost() {
		this.setState({passwordLost: true});
	}

	handleBackToLogin() {
		this.setState({passwordLost: false});
	}

	render() {
		return (
			<Container fluid className="loginContainer">
				{!this.state.passwordLost && <LoginFormComponent onForgotPassword={this.handlePasswordLost}/>}
				{this.state.passwordLost && <PasswordResetComponent onClick={this.handleBackToLogin}/>}
			</Container>
		);
	}
}
