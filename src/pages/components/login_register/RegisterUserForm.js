import React, {Component} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class RegisterUserForm extends Component {

    constructor() {
        super();
        this.state = {
            registerError: false
        };
    }

    render() {
        let registerErrorMessage;

        if (this.state.registerError) {
            registerErrorMessage =
                <div className="invalid-feedback">Ups, da ist wohl etwas schief gegangen. Probiere es doch später noch
                    einmal.</div>
        } else {
            registerErrorMessage = null;
        }
        const schema = Yup.object().shape({
            name: Yup.string().required("Bitte gib deinen Namen ein."),
            email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein."),
            password: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.')
                .required("Bitte gib dein Passwort ein."),
            passwordConfirm: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.').required("Bitte bestätige dein Passwort.").when("password", {
                is: val => (!!(val && val.length > 0)),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Die Passwörter müssen übereinstimmen."
                )
            }),
            terms: Yup.boolean().oneOf([true], 'Bitte akzeptiere die Datenschutzerklärung.'),
        });
        return (
            <Formik history={this.props.history}
                    setRegistered={this.props.setRegistered}
                    validationSchema={schema}
                    initialValues={{name: "", email: "", password: "", passwordConfirm: "", terms: false}}
                    onSubmit={(values, {resetForm}) => {
                        console.debug("Blubs");
                        axios.post(process.env.REACT_APP_API_URL + '/api/users', {
                            "user": {
                                "name": values.name,
                                "email": values.email,
                                "password": values.password
                            }
                        }, {
                            withCredentials: true
                        })
                            .then(res => {
                                if (res.status === 200) {
                                    this.props.setRegistered();
                                    this.props.history.push('/login');
                                } else {
                                    const error = new Error(res.error);
                                    throw error;
                                }
                            })
                            .catch(err => {
                                resetForm();
                                this.setState({
                                    registerError: true
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
                      errors
                  }) => (
                    <Form noValidate
                          history={this.props.history}
                          onSubmit={handleSubmit.bind(this)}>
                        <Form.Group controlId="formName"
                                    id="name-group">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image className="loginIcon"
                                           src="/assets/icons/name.svg"
                                           id="login-icon-1"/>
                                </InputGroup.Prepend>
                                <Form.Control required
                                              value={values.name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      registerError: false
                                                  })
                                              }}
                                              type="text"
                                              name="name"
                                              placeholder="Dein Name"
                                              className={this.state.registerError ? "nameUser login-form is-invalid" : "nameUser login-form"}
                                              isValid={touched.name & !errors.name}
                                              isInvalid={!!errors.name}/>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail"
                                    id="email-group">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image
                                        className="loginIcon"
                                        src="/assets/icons/icons-mail.svg"
                                        id="login-icon-2"/>
                                </InputGroup.Prepend>
                                <Form.Control required
                                              value={values.email}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      registerError: false
                                                  })
                                              }}
                                              type="email"
                                              name="email"
                                              placeholder="Deine Email"
                                              className={this.state.registerError ? "emailUser login-form is-invalid" : "emailUser login-form"}
                                              isValid={touched.email & !errors.email}
                                              isInvalid={!!errors.email}/>
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword"
                                    id="password-group">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image
                                        className="loginIcon"
                                        src="/assets/icons/icons-passwort.svg"
                                        id="login-icon-3"/>
                                </InputGroup.Prepend>
                                <Form.Control required
                                              value={values.password}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      registerError: false
                                                  })
                                              }}
                                              name="password"
                                              type="password"
                                              placeholder="Dein Passwort"
                                              className={this.state.registerError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
                                              isValid={touched.password & !errors.password}
                                              isInvalid={!!errors.password}/>
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicPasswordConfirmation"
                                    id="password-group-2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image
                                        className="loginIcon"
                                        src="/assets/icons/icons-passwort.svg"
                                        id="login-icon-4"/>
                                </InputGroup.Prepend>
                                <Form.Control required
                                              value={values.passwordConfirm}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      registerError: false
                                                  })
                                              }}
                                              name="passwordConfirm"
                                              type="password"
                                              placeholder="Dein Passwort bestätigen"
                                              className={this.state.registerError ? "passwordConfirmation login-form is-invalid" : "passwordConfirmation login-form"}
                                              isValid={touched.passwordConfirm & !errors.passwordConfirm & !errors.password}
                                              isInvalid={!!errors.passwordConfirm}/>
                                <Form.Control.Feedback type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                                {registerErrorMessage}
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="checkBoxGroup">
                            <Form.Check
                                required
                                name="terms"
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                onChange={handleChange}
                                onFocus={() => {
                                    this.setState({
                                        registerError: false
                                    })
                                }}
                                type={"checkbox"}
                                id={"datenschutzCheck"}
                                className={this.state.registerError ? "login-form is-invalid" : "login-form"}
                                label={<p>Ich habe die <a href='/privacy-policy'
                                                          target="_blank"
                                                          rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und
                                    akzeptiere
                                    diese.
                                </p>}
                            />
                        </Form.Group>
                        <Button className="loginFormButton"
                                type="submit"
                                value="Submit">
                            REGISTRIEREN
                        </Button>
                    </Form>
                )}
            </Formik>
        );
    }
}