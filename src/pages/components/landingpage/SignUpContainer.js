import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ToggleContainer from "./ToggleContainer";
import * as PropTypes from "prop-types";
import axios from 'axios';

import '../../css/landingpage/signUpContainer.css';


export default class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            isUser: true,
            isComplete: false,
            isFocused: {
                emailUser: false,
                nameCompany: false,
                emailCompany: false
            }
        };
    }

    handleToggle(event) {
        let target = event.target.className;
        this.setState({
            isUser: target.includes("userCol")
        });
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFocus(event) {
        let isFocused;
        if (event.target.className.includes("emailUser")) {
            isFocused = {
                emailUser: true,
                nameCompany: false,
                emailCompany: false
            }
        } else if (event.target.className.includes("nameCompany")) {
            isFocused = {
                emailUser: false,
                nameCompany: true,
                emailCompany: false
            }
        } else if (event.target.className.includes("emailCompany")) {
            isFocused = {
                emailUser: false,
                nameCompany: false,
                emailCompany: true
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
                nameCompany: false,
                emailCompany: false
            }
        })
    }

    handleGastroRegister(event) {
        event.preventDefault();
        axios.post('/api/users/landing', {
            user: {
                email: this.state.email,
                type: "business",
                name: this.state.name
            }
        })
            .then((data) => {
                this.setState({
                    isComplete: true
                });
                alert("Success!");
            })
            .catch((err) => {
                alert(err);
            });
        /* Logik für Gastro Kontakt */
    }

    handleUserRegister(event) {
        event.preventDefault();
        axios.post('/api/users/landing', {
            user: {
                email: this.state.email,
                type: "user"
            }
        })
            .then((data) => {
                this.setState({
                    isComplete: true
                });
                alert("Success!");
            })
            .catch((err) => {
            alert(err);
        });
        /* Logik für Mail Verteiler */
    }

    render() {
        let form;
        let description;
        if (this.state.isUser) {
            form = <RegisterUserForm isFocused={this.state.isFocused} onFocus={this.handleFocus.bind(this)}
                                     onBlur={this.handleBlur.bind(this)} onSubmit={this.handleUserRegister.bind(this)}
                                     onChange={this.handleInputChange}/>;
            description = <p>Aktuell ist die Plattform noch in Arbeit. Du kannst
                dich aber gerne für den Mailverteiler registrieren und wir benachrichtigen dich, sobald es losgeht
                :) </p>;
        } else {
            form =
                <RegisterGastroForm isFocused={this.state.isFocused} onFocus={this.handleFocus.bind(this)}
                                    onBlur={this.handleBlur.bind(this)} onSubmit={this.handleGastroRegister.bind(this)}
                                    onChange={this.handleInputChange}/>;
            description =
                <p>Aktuell ist die Plattform noch in Arbeit. Du kannst dich aber gerne mit deinem Unternehmen schon bei
                    uns registrieren. Wir melden uns dann bei dir und besprechen die Details :)</p>
        }
        return (
            <Container className="signUpContainer">
                <h4>Du möchtest mitmachen?</h4>
                <ToggleContainer {...this.state} handler={this.handleToggle.bind(this)}/>
                {description}
                {form}
            </Container>
        );
    }
}

class RegisterUserForm extends Component {

    render() {
        return (
            <Form id="registerLaunchForm" onSubmit={this.props.onSubmit}>
                <Form.Group className="registerEmail" controlId="formBasicEmail" id="email-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image src="/assets/icons/icons-mail.svg"
                                   className={this.props.isFocused.emailUser ? "loginIcon focused" : "loginIcon"}/>
                        </InputGroup.Prepend>
                        <Form.Control onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} type="email" name="email"
                                      placeholder="E-Mail" className="emailUser login-form"/>
                    </InputGroup>
                </Form.Group>
                <Button className="loginFormButton" ariant="primary" type="submit" value="Submit">
                    REGISTRIEREN
                </Button>
            </Form>);
    }
}

RegisterUserForm.propTypes = {
    onSubmit: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};

class RegisterGastroForm extends Component {

    render() {
        return <Form id="registerGastroForm" onSubmit={this.props.onSubmit}>
            <Form.Group className="registerName" controlId="formBasicText" id="nameGroup">
                <InputGroup>
                    <InputGroup.Prepend>
                        <Image src="/assets/icons/name.svg"
                               className={this.props.isFocused.nameCompany ? "loginIcon focused" : "loginIcon"}/>
                    </InputGroup.Prepend>
                    <Form.Control onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                  onChange={this.props.onChange} type="text" name="name"
                                  placeholder="Name des Lokals" className="nameCompany login-form"/>
                </InputGroup>
            </Form.Group>
            <Form.Group className="registerEmail" controlId="formBasicEmail" id="email-group">
                <InputGroup>
                    <InputGroup.Prepend>
                        <Image src="/assets/icons/icons-mail.svg"
                               className={this.props.isFocused.emailCompany ? "loginIcon focused" : "loginIcon"}/>
                    </InputGroup.Prepend>
                    <Form.Control onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                  onChange={this.props.onChange} type="email" name="email"
                                  placeholder="E-Mail" className="emailCompany login-form"/>
                </InputGroup>
            </Form.Group>
            <Button className="loginFormButton" ariant="primary" type="submit" value="Submit">
                REGISTRIEREN
            </Button>
        </Form>;
    }
}

RegisterGastroForm.propTypes = {
    onSubmit: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};