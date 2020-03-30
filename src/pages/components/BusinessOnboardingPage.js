import React from "react";
import NavBarContainer from "./navbar/NavBarContainer";
import FooterContainer from "./footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import axios from 'axios';

import './../css/pages/passwordResetPage.css';

export default class PasswordResetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
            resetSuccessful: false,
            passwordChangeError: false,
        };
        this.setPasswordChangeError = this.setPasswordChangeError(this);
    }

    setPasswordChangeError(error) {
        this.setState({
            passwordChangeError: error
        })
    }

    setResetSuccessful() {
        this.setState({
            resetSuccessful: true
        })
    }

    render() {
        return (
            <>
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Container fluid>
                    <Row className="coronaRow">
                        <Col className="passwordResetCol" md={6}>
                            <Container className="registerContainer passwordResetContainer">
                                <h4>Passwort zurücksetzen</h4>
                                <PasswordResetForm isSuccessful={this.state.resetSuccessful}
                                                   setResetSuccessful={this.setResetSuccessful}
                                                   token={this.props.match.params.token}
                                                   history={this.props.history}
                                                   setPasswordChangeError={this.setPasswordChangeError}
                                                   passwordChangeError={this.state.passwordChangeError}/>
                            </Container>

                        </Col>
                        <Col className="coronaImage" md={6}>
                            <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                        </Col>
                    </Row>
                </Container>
                <FooterContainer isLoggedIn={false}/>
            </>
        );
    }
}

class PasswordResetForm extends React.Component {

    render() {
        if (this.props.isSuccessful) {
            return (
                <div className="passwordResetSubmittedText">
                    <h4>
                        SUPER,
                    </h4>
                    <p>
                        Dein Passwort ist aktualisiert. Du kannst dich jetzt wieder mit deinem neuen Passwort einloggen.<br/>
                        Bis gleich! <span role="img"
                                          aria-label="yellow-heart"> 💛</span>
                    </p>
                </div>
            );
        } else {
            let passwordChangeErrorMessage;

            if (this.props.passwordChangeError) {
                passwordChangeErrorMessage =
                    <div className="invalid-feedback">Ups, da ist wohl etwas schief gegangen. Probiere es doch später
                        noch
                        einmal.</div>
            } else {
                passwordChangeErrorMessage = null;
            }
            const schema = Yup.object().shape({
                password: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.')
                    .required("Bitte gib dein Passwort ein."),
                passwordConfirm: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.').required("Bitte bestätige dein Passwort.").when("password", {
                    is: val => (!!(val && val.length > 0)),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Die Passwörter müssen übereinstimmen."
                    )
                })
            });
            return (
                <Formik passwordChangeError={this.props.passwordChangeError}
                        setPasswordChangeError={this.props.setPasswordChangeError}
                        history={this.props.history}
                        setResetSuccessful={this.props.setResetSuccessful}
                        validationSchema={schema}
                        initialValues={{password: "", passwordConfirm: ""}}
                        onSubmit={(values, {resetForm}) => {
                            console.log("Blubs");
                            axios.post(process.env.REACT_APP_API_URL + '/api/users/setPassword', {
                                user: {
                                    password: values.password,
                                    passwordVerification: values.passwordConfirm,
                                    token: this.props.token
                                }
                            }, {
                                withCredentials: true
                            }).then((data) => {
                                this.props.setResetSuccessful();
                            }).catch(err => {
                                resetForm();
                                console.log(err);
                                this.props.setPasswordChangeError(true);
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
                            <Form.Group controlId="formBasicPassword"
                                        id="password-group">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-passwort.svg"
                                            id="login-icon-3"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required value={values.password}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  onFocus={() => {
                                                      this.props.setPasswordChangeError(false)
                                                  }}
                                                  name="password"
                                                  type="password"
                                                  placeholder="Dein Passwort"
                                                  className={this.props.passwordChangeError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
                                                  isValid={touched.password & !errors.password}
                                                  isInvalid={!!errors.password}/>
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="passwordResetFormGroup2"
                                        controlId="formBasicPasswordConfirmation"
                                        id="password-group-2">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-passwort.svg"
                                            id="login-icon-4"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required value={values.passwordConfirm}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  onFocus={() => {
                                                      this.props.setPasswordChangeError(false)
                                                  }}
                                                  name="passwordConfirm"
                                                  type="password"
                                                  placeholder="Dein Passwort bestätigen"
                                                  className={this.props.passwordChangeError ? "passwordConfirmation login-form is-invalid" : "passwordConfirmation login-form"}
                                                  isValid={touched.passwordConfirm & !errors.passwordConfirm & !errors.password}
                                                  isInvalid={!!errors.passwordConfirm}/>
                                    {passwordChangeErrorMessage}
                                    <Form.Control.Feedback
                                        type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Button className="loginFormButton"
                                    type="submit"
                                    value="Submit">
                                BESTÄTIGEN
                            </Button>
                        </Form>
                    )}
                </Formik>
            )
        }
    }
}