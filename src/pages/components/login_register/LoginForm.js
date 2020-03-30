import React, {Component} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            loginError: false
        }
    }

    render() {

        let loginErrorMessage;

        if (this.state.loginError) {
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
                <Formik history={this.props.history}
                        validationSchema={schema}
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values, {resetForm}) => {
                            console.debug("Blub");
                            axios.post(process.env.REACT_APP_API_URL + '/api/users/login', {
                                "user": {
                                    "email": values.email,
                                    "password": values.password
                                }
                            }, {
                                withCredentials: true
                            })
                                .then(res => {
                                    if (res.status === 200) {
                                        this.props.history.push('/app');
                                    }
                                })
                                .catch(err => {
                                    resetForm();
                                    this.setState({
                                        loginError: true
                                    })
                                })
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
                                                      this.setState({
                                                          loginError: false
                                                      })
                                                  }}
                                                  type="email"
                                                  name="email"
                                                  placeholder="Deine Email"
                                                  className={this.state.loginError ? "emailUser login-form is-invalid" : "emailUser login-form"}
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
                                                      this.setState({
                                                          loginError: false
                                                      })
                                                  }}
                                                  onBlur={handleBlur}
                                                  name="password"
                                                  type="password"
                                                  placeholder="Dein Passwort"
                                                  className={this.state.loginError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
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