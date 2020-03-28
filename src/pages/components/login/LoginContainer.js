import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";
import * as PropTypes from "prop-types";

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
            PasswordLost: false,
            passwordResetSubmitted: false
        };
        this.handleFocus = this.handleFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordLost = this.handlePasswordLost.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFocus(event) {
        let isFocused;
        if (event.currentTarget.className.includes("emailUser")) {
            isFocused = {
                emailUser: true,
                passwordUser: false,
            }
        } else if (event.currentTarget.className.includes("passwordUser")) {
            isFocused = {
                emailUser: false,
                passwordUser: true,
            }
        }
        this.setState({
                isFocused: isFocused
            }
        );
    }

    handleBlur(event) {
        this.setState({
            isFocused: {
                emailUser: false,
                passwordUser: false
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/api/users/login', {"user": {"email": this.state.email, "password": this.state.password}})
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/app');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    handlePasswordLost(event) {
        this.setState({
            passwordLost: true
        });
        this.props.updatePasswordLostView({
            show: true,
            submitted: false
        });
    }

    handleBackToLogin() {
        this.setState({
            passwordLost: false
        });
        this.props.updatePasswordLostView({
            show: false,
            submitted: false
        });
    }

    handlePasswordReset() {
        this.setState({
            passwordResetSubmitted: true
        });
        this.props.updatePasswordLostView({
            show: false,
            submitted: true
        });
    }

    render() {
        let form;
        if (this.state.passwordLost) {
            form = <PasswordResetForm focused={this.state.isFocused} resetSubmitted={this.state.passwordResetSubmitted}
                                      onSubmit={this.handlePasswordReset}
                                      onFocus={this.handleFocus}
                                      onBlur={this.handleBlur} onChange={this.handleInputChange}
                                      onClick={this.handleBackToLogin}/>
        } else {
            form = <LoginForm onSubmit={this.handleSubmit} focused={this.state.isFocused} onFocus={this.handleFocus}
                              onBlur={this.handleBlur} onChange={this.handleInputChange}
                              onClick={this.handlePasswordLost}/>
        }
        return (
            <Container fluid className="loginContainer">
                {form}
            </Container>
        );
    }
}

class LoginForm extends Component {
    render() {
        return <>
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="formBasicEmail" id="email-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image className={this.props.focused.emailUser ? "loginIcon focused" : "loginIcon"}
                                   src="/assets/icons/icons-mail.svg" id="login-icon-1"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} type="email" name="email"
                                      placeholder="E-Mail" className="login-form emailUser"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" id="password-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image className={this.props.focused.passwordUser ? "loginIcon focused" : "loginIcon"}
                                   src="/assets/icons/icons-passwort.svg" id="login-icon-2"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} name="password" type="password"
                                      placeholder="Passwort" className="login-form passwordUser"/>
                    </InputGroup>
                </Form.Group>
                <Button className="loginFormButton" type="submit" value="Submit">
                    EINLOGGEN
                </Button>
            </Form>
            <a className="passwordLost" onClick={this.props.onClick}>
                <p>Passwort vergessen?</p>
            </a>
        </>;
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    focused: PropTypes.any,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

class PasswordResetForm extends Component {
    render() {
        if (this.props.resetSubmitted) {
            return (
                <div className="passwordResetSubmittedText">
                    <h4>
                        KEIN PROBLEM,
                    </h4>
                    <p>
                        das haben wir gleich gelöst. Wir haben dir eine Email geschickt mit der du im Nu dein Passwort
                        zurücksetzen kannst. <br/>
                        Bis gleich! <span role="img"
                                          aria-label="yellow-heart"> 💛</span>
                    </p>
                    <a className="backToLogin" onClick={this.props.onClick}>
                        <p>Zurück zum Login</p>
                    </a>
                </div>
            );
        }
        return <>
            <p className="passwordResetDescription">
                Du hast dein Passwort vergessen?
                Kein Problem – du kannst es hier ganz
                einfach zurücksetzen.
            </p>
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group className="emailPasswordReset" controlId="formBasicEmail" id="email-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image className={this.props.focused.emailUser ? "loginIcon focused" : "loginIcon"}
                                   src="/assets/icons/icons-mail.svg" id="login-icon-1"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} type="email" name="email"
                                      placeholder="E-Mail" className="login-form emailUser"/>
                    </InputGroup>
                </Form.Group>
                <Button className="loginFormButton" type="submit" value="Submit">
                    ZURÜCKSETZEN
                </Button>
            </Form>
            <a className="passwordLost" onClick={this.props.onClick}>
                <p>Zurück zum Login</p>
            </a>
        </>;
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    focused: PropTypes.any,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};