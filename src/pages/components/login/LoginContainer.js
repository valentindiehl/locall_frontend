import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";


import '../../css/login/loginContainer.css';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isFocused: {
                email: false,
                password: false,
            },
        };
        this.handleFocus = this.handleFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange (event) {
        const {value, name} = event.target;
        console.log(this.state.email);
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
                email: false,
                password: false
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email);
        axios.post('/api/users/login', {"user": {"email": this.state.email, "password": this.state.password}})
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.user.token);
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
    }

    render() {
        return (
            <Container fluid className="loginContainer">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail" id="email-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image className={this.state.isFocused.email ? "loginIcon focused" : "loginIcon"}
                                       src="/assets/icons/icons-mail.svg" id="login-icon-1"/>
                            </InputGroup.Prepend>
                            <Form.Control required onFocus={this.handleFocus} onBlur={this.handleBlur}
                                          onChange={this.handleInputChange} type="email" name="email"
                                          placeholder="E-Mail" className="login-form emailUser"/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" id="password-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image className={this.state.isFocused.password ? "loginIcon focused" : "loginIcon"}
                                       src="/assets/icons/icons-passwort.svg" id="login-icon-2"/>
                            </InputGroup.Prepend>
                            <Form.Control required onFocus={this.handleFocus} onBlur={this.handleBlur}
                                          onChange={this.handleInputChange} name="password" type="password"
                                          placeholder="Passwort" className="login-form passwordUser"/>
                        </InputGroup>
                    </Form.Group>
                    <Button className="loginFormButton" type="submit" value="Submit">
                        EINLOGGEN
                    </Button>
                </Form>
                <a className="passwordLost" onClick={this.handlePasswordLost.bind(this)}>
                    <p>Passwort vergessen?</p>
                </a>
            </Container>
        );
    }
}