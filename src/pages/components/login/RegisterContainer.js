import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";
import ToggleContainer from "../landingpage/ToggleContainer";
import * as PropTypes from "prop-types";

import '../../css/login/registerContainer.css';


export default class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            isUser: true,
            isFocused: {
                nameUser: false,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: false,
                nameCompany: false,
                emailCompany: false
            },
            width: window.innerWidth
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleGastroRegister = this.handleGastroRegister.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUserRegister = this.handleUserRegister.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            })
        });
    }

    handleToggle(event) {
        let target = event.currentTarget.className;
        this.setState({
            isUser: target.includes("userCol")
        });
    }


    handleInputChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFocus(event) {
        let isFocused;
        if (event.currentTarget.className.includes("nameUser")) {
            isFocused = {
                nameUser: true,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: false,
                nameCompany: false,
                emailCompany: false
            }
        } else if (event.currentTarget.className.includes("emailUser")) {
            isFocused = {
                nameUser: false,
                emailUser: true,
                passwordUser: false,
                passwordUserConfirmation: false,
                nameCompany: false,
                emailCompany: false
            }
        } else if (event.currentTarget.className.includes("passwordUser")) {
            isFocused = {
                nameUser: false,
                emailUser: false,
                passwordUser: true,
                passwordUserConfirmation: false,
                nameCompany: false,
                emailCompany: false
            }
        } else if (event.currentTarget.className.includes("passwordConfirmation")) {
            isFocused = {
                nameUser: false,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: true,
                nameCompany: false,
                emailCompany: false
            }
        } else if (event.currentTarget.className.includes("nameCompany")) {
            isFocused = {
                nameUser: false,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: false,
                nameCompany: true,
                emailCompany: false
            }
        } else if (event.currentTarget.className.includes("emailCompany")) {
            isFocused = {
                nameUser: false,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: false,
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
                nameUser: false,
                emailUser: false,
                passwordUser: false,
                passwordUserConfirmation: false,
                nameCompany: false,
                emailCompany: false
            }
        })
    }

    handleGastroRegister(event) {
        const self = this;
        event.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/api/users/landing', {
            user: {
                email: this.state.email,
                type: "business",
                name: this.state.name
            }
        })
            .then((data) => {
                self.setState({
                    isComplete: true
                });
                self.setState({registered: true})
            })
            .catch((err) => {
            });
    }

    handleUserRegister(event) {
        event.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/api/users', {
            "user": {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/login');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
            });
    };


    render() {
        if (this.state.width <= 1024) {
            return (
                <Container className="registerContainer">
                    <h4>Du möchtest mitmachen?</h4>
                    <p>Leider ist unsere Seite im Moment nur auf dem Desktop benutzbar. Setz dich doch einfach schnell
                        an deinen Laptop oder PC und melde dich dort an. In der Zwischenzeit arbeiten wir natürlich auf
                        Hochtouren an einer mobilen Version.<br/> Danke für deine Geduld!<span role="img"
                                                                                               aria-label="yellow-heart"> 💛</span>
                    </p>
                </Container>
            );
        } else {
            let form;
            if (this.state.isUser) {
                form = <RegisterUserForm isFocused={this.state.isFocused} onFocus={this.handleFocus}
                                         onBlur={this.handleBlur} onSubmit={this.handleSubmit}
                                         onChange={this.handleInputChange}/>;
            } else {
                form =
                    <RegisterGastroForm isFocused={this.state.isFocused} onFocus={this.handleFocus}
                                        onBlur={this.handleBlur} onSubmit={this.handleGastroRegister}
                                        onChange={this.handleInputChange}/>;
            }
            if (this.state.registered) {
                return (
                    <Container className="registerContainer">
                        <h4 className="registeredThanks">DANKE,</h4>
                        <p className="registeredMessage">dass du dich bei uns registriert hast. <span role="img"
                                                                                                      aria-label="yellow-heart">💛</span>.
                            Wir haben dir eine Email mit allen weiteren Infos geschickt und freuen uns schon auf dich!
                        </p>
                    </Container>
                );
            } else {

                return (
                    <Container className="registerContainer">
                        <h4>Du möchtest mitmachen?</h4>
                        <ToggleContainer {...this.state} handler={this.handleToggle}/>
                        {form}
                    </Container>
                );
            }
        }
    }
}

class RegisterUserForm extends Component {

    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="formName" id="name-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image className={this.props.isFocused.nameUser ? "loginIcon focused" : "loginIcon"}
                                   src="/assets/icons/name.svg" id="login-icon-1"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} type="text" name="name"
                                      placeholder="Dein Name" className="nameUser login-form"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" id="email-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image
                                className={this.props.isFocused.emailUser ? "loginIcon focused" : "loginIcon"}
                                src="/assets/icons/icons-mail.svg" id="login-icon-2"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} type="email" name="email"
                                      placeholder="Deine Email" className="emailUser login-form"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" id="password-group">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image
                                className={this.props.isFocused.passwordUser ? "loginIcon focused" : "loginIcon"}
                                src="/assets/icons/icons-passwort.svg" id="login-icon-3"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} name="password" type="password"
                                      placeholder="Dein Passwort" className="passwordUser login-form"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" id="password-group-2">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Image
                                className={this.props.isFocused.passwordUserConfirmation ? "loginIcon focused" : "loginIcon"}
                                src="/assets/icons/icons-passwort.svg" id="login-icon-4"/>
                        </InputGroup.Prepend>
                        <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                      onChange={this.props.onChange} name="password" type="password"
                                      placeholder="Dein Passwort bestätigen"
                                      className="passwordConfirmation login-form"/>
                    </InputGroup>
                </Form.Group>
                <Form.Check
                    required
                    type={"checkbox"}
                    id={"datenschutzCheck"}
                    label={<p>Ich habe die <a href='/privacy-policy'>Datenschutzerklärung</a> gelesen und
                        akzeptiere
                        diese.
                    </p>}
                />
                <Button className="loginFormButton" type="submit" value="Submit">
                    REGISTRIEREN
                </Button>
            </Form>
        );
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

        return (<Form id="registerGastroForm" onSubmit={this.props.onSubmit}>
            <Form.Group className="registerName" controlId="formBasicText" id="nameGroup">
                <InputGroup>
                    <InputGroup.Prepend>
                        <Image src="/assets/icons/name.svg"
                               className={this.props.isFocused.nameCompany ? "loginIcon focused" : "loginIcon"}/>
                    </InputGroup.Prepend>
                    <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
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
                    <Form.Control required onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                                  onChange={this.props.onChange} type="email" name="email"
                                  placeholder="E-Mail" className="emailCompany login-form"/>
                </InputGroup>
            </Form.Group>
            <Form.Check
                required
                type={"checkbox"}
                id={"datenschutzCheck"}
                label={<p>Ich habe die <a href='/privacy-policy'>Datenschutzerklärung</a> gelesen und akzeptiere
                    diese.
                </p>}
            />
            <Button className="loginFormButton" type="submit" value="Submit">
                REGISTRIEREN
            </Button>
        </Form>);
    }
}

RegisterGastroForm.propTypes = {
    onSubmit: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};