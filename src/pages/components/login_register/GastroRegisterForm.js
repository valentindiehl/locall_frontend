import React, {Component} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class RegisterGastroForm extends Component {

    constructor() {
        super();
        this.state = {
            registerBusinessError: false
        };
    }

    render() {
        let registerBusinessErrorMessage;

        if (this.state.registerBusinessError) {
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
                terms: Yup.boolean().oneOf([true], 'Bitte akzeptiere die Datenschutzerklärung.'),
            });

        return (

            <Formik history={this.props.history}
                    setRegistered={this.props.setRegistered}
                    validationSchema={schema}
                    initialValues={{name: "", email: ""}}
                    onSubmit={(values, {resetForm}) => {
                        console.log("Blubs");
                        axios.post(process.env.REACT_APP_API_URL + '/api/applications', {
                            application: {
                                email: values.email,
                                businessName: values.name
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
                                this.setState({
                                    registerBusinessError: true
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
                                              onFocus={() =>
                                                  this.setState({
                                                      registerBusinessError: false
                                                  })
                                              }
                                              type="text"
                                              name="name"
                                              placeholder="Name deines Lokals"
                                              className={this.state.registerBusinessError ? "nameUser login-form is-invalid" : "nameUser login-form"}
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
                                              onFocus={() =>
                                                  this.setState({
                                                      registerBusinessError: false
                                                  })
                                              }
                                              type="email"
                                              name="email"
                                              placeholder="Deine Email"
                                              className={this.state.registerBusinessError ? "emailUser login-form is-invalid" : "emailUser login-form"}
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
                                onFocus={() =>
                                    this.setState({
                                        registerBusinessError: false
                                    })
                                }
                                id={"datenschutzCheck"}
                                className={this.state.registerBusinessError ? "login-form is-invalid" : "login-form"}
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
