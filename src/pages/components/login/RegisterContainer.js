import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";
import ToggleContainer from "../landingpage/ToggleContainer";
import * as Yup from "yup";
import {Formik} from "formik";

import '../../css/login/registerContainer.css';


export default class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: true,
            width: window.innerWidth,
            registered: false,
            registerError: false,
            registerBusinessError: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.setRegistered = this.setRegistered.bind(this);
        this.setRegisterError = this.setRegisterError(this);
        this.setRegisterBusinessError = this.setRegisterBusinessError(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            })
        });
    }

    setRegisterBusinessError(error) {
        this.setState({
            registerBusinessError: error
        })
    }

    setRegisterError(error) {
        this.setState({
            registerError: error
        })
    }

    setRegistered() {
        this.setState({
            registered: true
        })
    }

    handleToggle(event) {
        let target = event.currentTarget.className;
        this.setState({
            isUser: target.includes("userCol")
        });
    }

    render() {
        if (this.state.width <= 1024) {
            return (
                <Container className="registerContainer">
                    <h4>Du möchtest mitmachen?</h4>
                    <p>Leider ist unsere Seite im Moment nur auf dem Desktop benutzbar. Setz dich doch einfach schnell
                        an deinen Laptop oder PC und melde dich dort an. In der Zwischenzeit arbeiten wir natürlich auf
                        Hochtouren an einer mobilen Version.<br/> Danke für deine Geduld!<span role="img"
                                                                                               aria-label="yellow-heart"> 💛</span><br/><br/>
                    </p>
                </Container>
            );
        } else {
            let form;
            if (this.state.isUser) {
                form = <RegisterUserForm history={this.props.history}
                                         setRegistered={this.setRegistered}
                                         registerError={this.state.registerError}
                                         setRegisterError={this.setRegisterError}/>;
            } else {
                form =
                    <RegisterGastroForm history={this.props.history}
                                        setRegistered={this.setRegistered}
                                        registerError={this.state.registerBusinessError}
                                        setRegisterError={this.setRegisterBusinessError}/>;
            }
            if (this.state.registered) {
                return (
                    <Container className="registerContainer">
                        <h4 className="registeredThanks">DANKE,</h4>
                        <p className="registeredMessage">dass du dich bei uns registriert hast <span role="img"
                                                                                                     aria-label="yellow-heart">💛</span>.<br/>
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
        let registerErrorMessage;

        console.log(this.props);

        if (this.props.registerError) {
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
            <Formik setRegisterError={this.props.setRegisterError}
                    registerError={this.props.registerError}
                    history={this.props.history}
                    setRegistered={this.props.setRegistered}
                    validationSchema={schema}
                    initialValues={{name: "", email: "", password: "", passwordConfirm: "", terms: false}}
                    onSubmit={(values, {resetForm}) => {
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
                                console.log(err);
                                this.props.setRegisterError(true);
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
                                                  this.props.setRegisterError(false)
                                              }}
                                              type="text"
                                              name="name"
                                              placeholder="Dein Name"
                                              className={this.props.registerError ? "nameUser login-form is-invalid" : "nameUser login-form"}
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
                                                  this.props.setRegisterError(false)
                                              }}
                                              type="email"
                                              name="email"
                                              placeholder="Deine Email"
                                              className={this.props.registerError ? "emailUser login-form is-invalid" : "emailUser login-form"}
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
                                                  this.props.setRegisterError(false)
                                              }}
                                              name="password"
                                              type="password"
                                              placeholder="Dein Passwort"
                                              className={this.props.registerError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
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
                                                  this.props.setRegisterError(false)
                                              }}
                                              name="passwordConfirm"
                                              type="password"
                                              placeholder="Dein Passwort bestätigen"
                                              className={this.props.registerError ? "passwordConfirmation login-form is-invalid" : "passwordConfirmation login-form"}
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
                                    this.props.setRegisterError(false)
                                }}
                                type={"checkbox"}
                                id={"datenschutzCheck"}
                                className={this.props.registerError ? "login-form is-invalid" : "login-form"}
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

class RegisterGastroForm extends Component {

    render() {
        let registerBusinessErrorMessage;

        if (this.props.registerError) {
            registerBusinessErrorMessage =
                <div className="invalid-feedback">Ups, da ist wohl etwas schief gegangen. Probiere es doch später noch
                    einmal.</div>
        } else {
            registerBusinessErrorMessage = null;
        }
        const
            schema = Yup.object().shape({
                name: Yup.string().required("Bitte gib den Names deines Lokals ein."),
                email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein."),
                terms: Yup.bool().required()
            });

        return (

            <Formik setRegisterError={this.props.setRegisterError}
                    registerError={this.props.registerError}
                    history={this.props.history}
                    setRegistered={this.props.setRegistered}
                    validationSchema={schema}
                    initialValues={{name: "", email: ""}}
                    onSubmit={(values, {resetForm}) => {
                        axios.post(process.env.REACT_APP_API_URL + '/api/applications', {
                            user: {
                                email: values.email,
                                name: values.name
                            }
                        }, {
                            withCredentials: true
                        })
                            .then(res => {
                                if (res.status === 200) {
                                    this.props.setRegistered();
                                } else {
                                }
                            })
                            .catch(err => {
                                resetForm();
                                console.log(err);
                                this.props.setRegisterError(true);
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
                                                  console.log(this.props);
                                                  this.props.setRegisterError(false)
                                              }}
                                              type="text"
                                              name="name"
                                              placeholder="Name deines Lokals"
                                              className={this.props.registerError ? "nameUser login-form is-invalid" : "nameUser login-form"}
                                              isValid={touched.name & !errors.name}
                                              isInvalid={!!errors.name}/>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
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
                                                  console.log(typeof(this.props.setRegisterError));
                                                  this.props.setRegisterError(false)
                                              }}
                                              type="email"
                                              name="email"
                                              placeholder="Deine Email"
                                              className={this.props.registerError ? "emailUser login-form is-invalid" : "emailUser login-form"}
                                              isValid={touched.email & !errors.email}
                                              isInvalid={!!errors.email}/>
                                {registerBusinessErrorMessage}
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                required
                                onChange={handleChange}
                                feedback={!!errors.terms}
                                type={"checkbox"}
                                onFocus={() => {
                                    console.log(typeof(this.props.setRegisterError));
                                    //this.props.setRegisterBusinessError(false)
                                }}
                                id={"datenschutzCheck"}
                                className={this.props.registerError ? "login-form is-invalid" : "login-form"}
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
