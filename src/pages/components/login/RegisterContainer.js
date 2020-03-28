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
    constructor() {
        super();
        this.state = {
            isUser: true,
            width: window.innerWidth,
            registered: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.setRegistered = this.setRegistered.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            })
        });
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
                                                                                               aria-label="yellow-heart"> 💛</span>
                    </p>
                </Container>
            );
        } else {
            let form;
            if (this.state.isUser) {
                form = <RegisterUserForm history={this.props.history} setRegistered={this.setRegistered}/>;
            } else {
                form =
                    <RegisterGastroForm/>;
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
            // terms: Yup.bool().required()
        });
        return (
            <Formik history={this.props.history} setRegistered={this.props.setRegistered} validationSchema={schema}
                    initialValues={{name: "", email: "", password: "", passwordConfirm: ""}}
                    onSubmit={(values, formikBag ) => {
                        console.log(values);
                        console.log("FUCK EVERYONE I HATE REACT VALIDATION");
                        axios.post(process.env.REACT_APP_API_URL + '/api/users', {
                            "user": {
                                "name": values.name,
                                "email": values.email,
                                "password": values.password
                            }
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
                                console.error(err);
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
                    <Form noValidate history={this.props.history} onSubmit={handleSubmit.bind(this)}>
                        <Form.Group controlId="formName" id="name-group">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image className="loginIcon"
                                           src="/assets/icons/name.svg" id="login-icon-1"/>
                                </InputGroup.Prepend>
                                <Form.Control required value={values.name} onChange={handleChange} onBlur={handleBlur}
                                              type="text"
                                              name="name"
                                              placeholder="Dein Name" className="nameUser login-form"
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
                                              value={values.email} onChange={handleChange} onBlur={handleBlur}
                                              type="email" name="email"
                                              placeholder="Deine Email" className="emailUser login-form"
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
                                              onBlur={handleBlur} name="password"
                                              type="password"
                                              placeholder="Dein Passwort" className="passwordUser login-form"
                                              isValid={touched.password & !errors.password}
                                              isInvalid={!!errors.password}/>
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicPasswordConfirmation" id="password-group-2">
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
                                <Form.Control.Feedback type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                required
                                onChange={handleChange}
                                feedback={!!errors.terms}
                                type={"checkbox"}
                                id={"datenschutzCheck"}
                                label={<p>Ich habe die <a href='/privacy-policy'>Datenschutzerklärung</a> gelesen und
                                    akzeptiere
                                    diese.
                                </p>}
                            />
                        </Form.Group>
                        <Button className="loginFormButton" type="submit" value="Submit" >
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
        const
            schema = Yup.object().shape({
                name: Yup.string().required("Bitte gib den Names deines Lokals ein."),
                email: Yup.string().email("Bitte gib eine valide Email ein.").required("Bitte gib deine Email ein."),
                terms: Yup.bool().required()
            });

        return (

            <Formik validationSchema={schema}
                    initialValues={{name: "", email: ""}}
                    onSubmit={(values) => {
                        const self = this;
                        axios.post(process.env.REACT_APP_API_URL + '/api/users/landing', {
                            user: {
                                email: values.email,
                                type: "business",
                                name: values.name
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
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" id="name-group">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Image className="loginIcon"
                                           src="/assets/icons/name.svg" id="login-icon-1"/>
                                </InputGroup.Prepend>
                                <Form.Control required value={values.name} onChange={handleChange} onBlur={handleBlur}
                                              type="text"
                                              name="name"
                                              placeholder="Name deines Lokals" className="nameUser login-form"
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
                                              value={values.email} onChange={handleChange} onBlur={handleBlur}
                                              type="email" name="email"
                                              placeholder="Deine Email" className="emailUser login-form"
                                              isValid={touched.email & !errors.email}
                                              isInvalid={!!errors.email}/>
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                required
                                onChange={handleChange}
                                feedback={!!errors.terms}
                                type={"checkbox"}
                                id={"datenschutzCheck"}
                                label={<p>Ich habe die <a href='/privacy-policy'>Datenschutzerklärung</a> gelesen und
                                    akzeptiere
                                    diese.
                                </p>}
                            />
                        </Form.Group>
                        <Button className="loginFormButton" type="submit" value="Submit">
                            REGISTRIEREN
                        </Button>
                    </Form>
                )}
            </Formik>
        );
    }
}
