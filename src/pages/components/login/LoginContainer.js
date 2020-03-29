import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";
import * as Yup from "yup";
import {Formik} from "formik";

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
            passwordResetSubmitted: false,
            loginError: false,
            passwordResetError: false
        };
        this.handlePasswordLost = this.handlePasswordLost.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
        this.setLoginError = this.setLoginError.bind(this);
        this.setPasswordResetError = this.setPasswordResetError(this);
    }

    setLoginError(error) {
        this.setState({
            loginError: error
        })
    }

    setPasswordResetError(error) {
        this.setState({
            passwordResetError: error
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

    render() {
        let form;
        if (this.state.passwordLost) {
            form = <PasswordResetForm resetSubmitted={this.state.passwordResetSubmitted}
                                      setPasswordResetError={this.setPasswordResetError}
                                      passwordResetError={this.state.passwordResetError}
                                      onClick={this.handleBackToLogin}/>
        } else {
            form = <LoginForm onClick={this.handlePasswordLost}
                              setLoginError={this.setLoginError}
                              loginError={this.state.loginError}
                              history={this.props.history}/>
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
                <Formik loginError={this.props.loginError}
                        history={this.props.history}
                        setLoginError={this.props.setLoginError}
                        validationSchema={schema}
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
                        <Form noValidate
                              history={this.props.history}
                              onSubmit={handleSubmit.bind(this)}>
                            <Form.Group controlId="formBasicEmail" id="email-group">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-mail.svg" id="login-icon-2"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required
                                                  value={values.email}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  onFocus={() => {
                                                      this.props.setLoginError(false)
                                                  }}
                                                  type="email"
                                                  name="email"
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
                                    <Form.Control required value={values.password}
                                                  onChange={handleChange}
                                                  onFocus={() => {
                                                      this.props.setLoginError(false)
                                                  }}
                                                  onBlur={handleBlur}
                                                  name="password"
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
                        das haben wir gleich gelöst. Wenn du bei uns registriert warst, haben wir dir eine Email mit
                        allen weiteren Schritten geschickt.<br/>
                        Bis gleich! <span role="img"
                                          aria-label="yellow-heart"> 💛</span>
                    </p>
                    <a className="backToLogin" onClick={this.props.onClick}>
                        <p>Zurück zum Login</p>
                    </a>
                </div>
            );
        } else {
            let passwordResetErrorMessage;

            if (this.props.passwordResetError) {
                passwordResetErrorMessage =
                    <div className="invalid-feedback">Ups, da ist wohl etwas schief gegangen. Probiere es doch später
                        noch
                        einmal.</div>
            } else {
                passwordResetErrorMessage = null;
            }
            const
                schema = Yup.object().shape({
                    email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein.")
                });

            return (
                <>
                    <Formik passwordResetError={this.props.passwordResetError}
                            history={this.props.history}
                            setPasswordResetError={this.props.setPasswordResetError}
                            validationSchema={schema}
                            initialValues={{email: ""}}
                            onSubmit={(values, {resetForm}) => {
                                axios.post(process.env.REACT_APP_API_URL + '/api/users/resetPassword', {
                                    "user": {
                                        "email": values.email,
                                    }
                                }).then((res) => {
                                    this.setState({
                                        resetSubmitted: true
                                    })
                                }).catch(err => {
                                    resetForm();
                                    console.log(err);
                                    this.props.setPasswordResetError(true);
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
                            <Form noValidate
                                  history={this.props.history}
                                  onSubmit={handleSubmit.bind(this)}>
                                <Form.Group controlId="formBasicEmail" id="email-group">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <Image
                                                className="loginIcon"
                                                src="/assets/icons/icons-mail.svg" id="login-icon-2"/>
                                        </InputGroup.Prepend>
                                        <Form.Control required
                                                      value={values.email}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      onFocus={() => {
                                                          this.props.setPasswordResetError(false)
                                                      }}
                                                      type="email" name="email"
                                                      placeholder="Deine Email"
                                                      className={this.props.passwordResetError ? "emailUser login-form is-invalid" : "emailUser login-form"}
                                                      isValid={touched.email & !errors.email}
                                                      isInvalid={!!errors.email}/>
                                        {passwordResetErrorMessage}
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