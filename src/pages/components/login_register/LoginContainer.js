import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import PasswordResetForm from "./PasswordResetForm";
import LoginForm from "./LoginForm";

import '../../css/login/loginContainer.css';


export default class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isFocused: {
                emailUser: false,
                passwordUser: false,
            },
            PasswordLost: false
        };
        this.handlePasswordLost = this.handlePasswordLost.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
    }


    handlePasswordLost() {
        this.setState({
            passwordLost: true
        });
    }

    handleBackToLogin() {
        this.setState({
            passwordLost: false
        });
    }

    render() {
        let form;
        if (this.state.passwordLost) {
            form =
                <PasswordResetForm onClick={this.handleBackToLogin}/>
        } else {
            form = <LoginForm onClick={this.handlePasswordLost} history={this.props.history}/>
        }
        return (
            <Container fluid className="loginContainer">
                {form}
            </Container>
        );
    }
}