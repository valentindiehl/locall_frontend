import React, {Component} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class PasswordResetForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetSubmitted: false,
            passwordResetError: false
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

            if (this.state.passwordResetError) {
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
                    <Formik history={this.props.history}
                            validationSchema={schema}
                            initialValues={{email: ""}}
                            onSubmit={(values, {resetForm}) => {
                                axios.patch(process.env.REACT_APP_API_URL + '/v1/account/password', {
                                    "user": {
                                        "email": values.email,
                                    }
                                }, {
                                    withCredentials: true
                                }).then((res) => {
                                    this.setState({
                                        resetSubmitted: true
                                    })
                                }).catch(err => {
                                    resetForm();
                                    this.setState({
                                        passwordResetError: true
                                    });
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
                                                          this.setState({
                                                              passwordResetError: false
                                                          });
                                                      }}
                                                      type="email" name="email"
                                                      placeholder="Deine Email"
                                                      className={this.state.passwordResetError ? "emailUser login-form is-invalid" : "emailUser login-form"}
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