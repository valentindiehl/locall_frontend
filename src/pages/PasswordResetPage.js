import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FooterContainer from "./components/footer/FooterContainer";
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

import '../pages/css/pages/passwordResetPage.css';

export default class PasswordResetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
            passwordToken: ''
        }
    }

    componentDidMount() {
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
                                <PasswordResetForm token={this.props.match.params.token} history={this.props.history}/>
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


            <>
                <Formik history={this.props.history} validationSchema={schema}
                        initialValues={{password: "", passwordConfirm: ""}}
                        onSubmit={(values, {resetForm}) => {
                            console.log("Blubs");
                            axios.post(process.env.REACT_APP_API_URL + '/api/users/setPassword', {
                                user: {
                                    password: values.password,
                                    passwordVerification: values.passwordConfirm,
                                    token: this.props.token
                                }
                            }).then((data) => {
                                this.props.history.push('/login');
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
                        <Form noValidate history={this.props.history}
                              onSubmit={handleSubmit.bind(this)}>
                            <Form.Group controlId="formBasicPassword" id="password-group">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-passwort.svg" id="login-icon-3"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required value={values.password} onChange={handleChange}
                                                  onBlur={handleBlur} name="password"
                                                  type="password"
                                                  placeholder="Dein Passwort" className="passwordUser login-form"
                                                  isValid={touched.password & !errors.password}
                                                  isInvalid={!!errors.password}/>
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="passwordResetFormGroup2" controlId="formBasicPasswordConfirmation" id="password-group-2">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Image
                                            className="loginIcon"
                                            src="/assets/icons/icons-passwort.svg" id="login-icon-4"/>
                                    </InputGroup.Prepend>
                                    <Form.Control required value={values.passwordConfirm} onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  name="passwordConfirm"
                                                  type="password"
                                                  placeholder="Dein Passwort bestätigen"
                                                  className="passwordConfirmation login-form"
                                                  isValid={touched.passwordConfirm & !errors.passwordConfirm & !errors.password}
                                                  isInvalid={!!errors.passwordConfirm}/>
                                    <Form.Control.Feedback
                                        type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Button className="loginFormButton" type="submit" value="Submit">
                                BESTÄTIGEN
                            </Button>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}