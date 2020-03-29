import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";
import * as PropTypes from "prop-types";

import '../../css/login/loginContainer.css';
import * as Yup from "yup";
import {Formik} from "formik";


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
            passwordResetSubmitted: false,
            loginError: false
        };
        this.handlePasswordLost = this.handlePasswordLost.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
        this.setLoginError = this.setLoginError.bind(this);
    }

    setLoginError(error) {
        this.setState({
            loginError: error
        })
    }

    handlePasswordLost(event) {
        this.setState({
            passwordLost: true,
            passwordResetSubmitted: false
        });
    }

    handleBackToLogin() {
        this.setState({
            passwordLost: false
        });
    }

    handlePasswordReset(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                passwordResetValidated: true
            });
        } else {
            this.setState({
                passwordResetValidated: true
            });
            /* API Call missing */
            this.setState({
                passwordResetSubmitted: true,
            });
        }
    }

    render() {
        let form;
        if (this.state.passwordLost) {
            form = <PasswordResetForm resetSubmitted={this.state.passwordResetSubmitted}
                                      onClick={this.handleBackToLogin}/>
        } else {
            form = <LoginForm onClick={this.handlePasswordLost} setLoginError={this.setLoginError}
                              loginError={this.state.loginError} history={this.props.history}/>
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

        let loginErrorMessage;

        if (this.props.loginError) {
            loginErrorMessage = <div className="invalid-feedback">Diese Kombination aus Email und Passwort ist uns nicht
                bekannt.<br/> Hast du deine Email schon bestätigt?</div>
        } else {
            loginErrorMessage = null;
        }

        const schema = Yup.object().shape({
            email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein."),
            password: Yup.string().min(8, 'Dein Passwort muss mindestens 8 Zeichen lang sein.').required("Bitte gib dein Passwort ein.")
        });


        return (
            <>
                <Formik loginError={this.props.loginError} history={this.props.history} setLoginError={this.setLoginError} validationSchema={schema}
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values, {resetForm}) => {
                            console.log("Blub");
                            axios.post(process.env.REACT_APP_API_URL + '/api/users/login', {
                                "user": {
                                    "email": values.email,
                                    "password": values.password
                                }
                            })
                                .then(res => {
                                    if (res.status === 200) {
                                        console.log("Blubs");
                                        this.props.history.push('/app');
                                    } else {
                                        console.log(res);
                                    }
                                })
                                .catch(err => {
                                    resetForm();
                                    console.log(err);
                                    this.props.setLoginError(true);
                                });
                        }}
                >
                    {({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                          touched,
                          errors,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit.bind(this)}>
                            <Form.Group controlId="formBasicEmail" id="email-group">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-mail.svg" id="login-icon-2"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required
                                                  value={values.email} onChange={handleChange} onBlur={handleBlur}
                                                  onFocus={() => {
                                                      this.props.setLoginError(false)
                                                  }}
                                                  type="email" name="email"
                                                  placeholder="Deine Email"
                                                  className={this.props.loginError ? "emailUser login-form is-invalid" : "emailUser login-form"}
                                                  isValid={touched.email & !errors.email}
                                                  isInvalid={!!errors.email}/>
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" id="password-group">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-passwort.svg" id="login-icon-3"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required value={values.password} onChange={handleChange}
                                                  onFocus={() => {
                                                      this.props.setLoginError(false)
                                                  }}
                                                  onBlur={handleBlur} name="password"
                                                  type="password"
                                                  placeholder="Dein Passwort"
                                                  className={this.props.loginError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
                                                  isValid={touched.password & !errors.password}
                                                  isInvalid={!!errors.password}/>
                                    {loginErrorMessage}
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Button className="loginFormButton" type="submit" value="Submit">
                                EINLOGGEN
                            </Button>
                        </Form>
                    )}
                </Formik>
                <a className="passwordLost" onClick={this.props.onClick}>
                    <p>Passwort vergessen?</p>
                </a>
            </>
        );
    }
}

class PasswordResetForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetSubmitted: false
        }
    }

    render() {
        if (this.state.resetSubmitted) {
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
        } else {
            const
                schema = Yup.object().shape({
                    email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein.")
                });

            return (
                <>
                    <Formik validationSchema={schema}
                            initialValues={{email: ""}}
                            onSubmit={(values) => {
                                axios.post(process.env.REACT_APP_API_URL + '/api/users/resetPassword', {
                                    "user": {
                                        "email": values.email,
                                    }
                                }).then((res) => {
                                    this.setState({
                                        resetSubmitted: true
                                    })
                                });
                            }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              errors,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit.bind(this)}>
                                <Form.Group controlId="formBasicEmail" id="email-group">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <Image
                                                className="loginIcon"
                                                src="/assets/icons/icons-mail.svg" id="login-icon-2"/>
                                        </InputGroup.Prepend>
                                        <Form.Control required
                                                      value={values.email} onChange={handleChange} onBlur={handleBlur}
                                                      type="email" name="email"
                                                      placeholder="Deine Email" className="emailUser login-form"
                                                      isValid={touched.email & !errors.email}
                                                      isInvalid={!!errors.email}/>
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Button className="loginFormButton" type="submit" value="Submit">
                                    ZURÜCKSETZEN
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <a className="passwordLost" onClick={this.props.onClick}>
                        <p>Zurück zum Login</p>
                    </a>
                </>
            );
        }
    }
}