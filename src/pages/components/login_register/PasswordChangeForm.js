import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default class PasswordChangeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resetSuccessful: false,
            passwordChangeError: false,
            deleteAccount: false
        };
        this.hideSuccessMessage = this.hideSuccessMessage.bind(this);
        this.showDeletionPopup = this.showDeletionPopup.bind(this);
        this.hideDeletionPopup = this.hideDeletionPopup.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    hideSuccessMessage() {
        this.setState({
            resetSuccessful: false
        });
    }

    showDeletionPopup() {
        this.setState({
            deleteAccount: true
        })
    }

    hideDeletionPopup() {
        this.setState({
            deleteAccount: false
        })
    }

    deleteAccount() {
        axios.delete(process.env.REACT_APP_API_URL + "/api/users", {
          withCredentials: true
        }).then((res) => {
            this.props.history.push('/login');
        })
    }

    render() {
        let passwordChangeErrorMessage;

        if (this.state.passwordChangeError) {
            passwordChangeErrorMessage =
                <div className="invalid-feedback">Ups, da ist wohl etwas schief gegangen. Probiere es doch
                    später
                    noch
                    einmal.</div>
        } else {
            passwordChangeErrorMessage = null;
        }

        if (this.props.isPasswordChange) {
            if (this.state.deleteAccount) {
                return (
                    <div className="passwordResetSubmittedText">
                        <h4>
                            SICHER?
                        </h4>
                        <p>
                           Deine Account Löschung kannst du nicht rückgängig machen.
                        </p>
                        <Button className="loginFormButton deleteButton"
                                variant="link"
                                onClick={this.deleteAccount}>
                            JA
                        </Button>
                        <Button className="loginFormButton button-grey"
                                variant="link"
                                onClick={this.hideDeletionPopup}>
                            ABBRECHEN
                        </Button>
                    </div>
                );
            } else {
                if (this.state.resetSuccessful) {
                    return (
                        <div className="passwordResetSubmittedText">
                            <h4>
                                SUPER,
                            </h4>
                            <p>
                                Dein Passwort ist aktualisiert. Ab jetzt kannst du dich mit deinem neuen Passwort
                                einloggen.
                            </p>
                            <Button className="loginFormButton"
                                    variant="link"
                                    onClick={this.hideSuccessMessage}>
                                OKAY
                            </Button>
                        </div>
                    );
                } else {
                    const schema = Yup.object().shape({
                        oldPassword: Yup.string().required("Bitte gib dein altes Passwort ein."),
                        password: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.')
                            .required("Bitte gib dein neues Passwort ein."),
                        passwordConfirm: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.').required("Bitte bestätige dein neues Passwort.").when("password", {
                            is: val => (!!(val && val.length > 0)),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Die Passwörter müssen übereinstimmen."
                            )
                        })
                    });
                    return (
                        <Formik validationSchema={schema}
                                initialValues={{oldPassword: "", password: "", passwordConfirm: ""}}
                                onSubmit={(values, {resetForm}) => {
                                    axios.put(process.env.REACT_APP_API_URL + "/api/users/password", {
                                        user: {
                                            oldPassword: values.oldPassword,
                                            password: values.password,
                                            passwordVerification: values.passwordConfirm
                                        }
                                    }, {
                                        withCredentials: true
                                    }).then((data) => {
                                        this.setState({
                                            resetSuccessful: true
                                        });
                                    }).catch(err => {
                                        resetForm();
                                        this.setState({
                                            passwordChangeError: true
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
                                <Form noValidate onSubmit={handleSubmit.bind(this)}>
                                    <Form.Group controlId="formBasicPassword"
                                                id="password-group-1">
                                        <Form.Label className="label">Dein altes Passwort</Form.Label>
                                        <Form.Control required value={values.oldPassword}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      onFocus={() => {
                                                          this.setState({
                                                              passwordChangeError: false
                                                          })
                                                      }}
                                                      name="password"
                                                      type="password"
                                                      placeholder="Dein altes Passwort"
                                                      className={this.state.passwordChangeError ? "old-password login-form is-invalid" : "old-password login-form"}
                                                      isValid={touched.oldPassword & !errors.oldPassword}
                                                      isInvalid={!!errors.oldPassword}/>
                                        <Form.Control.Feedback
                                            type="invalid">{errors.oldPassword}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword"
                                                id="password-group">
                                        <Form.Label className="label">Dein neues Passwort</Form.Label>
                                        <Form.Control required value={values.password}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      onFocus={() => {
                                                          this.setState({
                                                              passwordChangeError: false
                                                          })
                                                      }}
                                                      name="password"
                                                      type="password"
                                                      placeholder="Dein Passwort"
                                                      className={this.state.passwordChangeError ? "password login-form is-invalid" : "password login-form"}
                                                      isValid={touched.password & !errors.password}
                                                      isInvalid={!!errors.password}/>
                                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="passwordResetFormGroup2"
                                                controlId="formBasicPasswordConfirmation"
                                                id="password-group-2">
                                        <Form.Control required value={values.passwordConfirm}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      onFocus={() => {
                                                          this.setState({
                                                              passwordChangeError: false
                                                          })
                                                      }}
                                                      name="passwordConfirm"
                                                      type="password"
                                                      placeholder="Dein Passwort bestätigen"
                                                      className={this.state.passwordChangeError ? "passwordConfirmation login-form is-invalid" : "passwordConfirmation login-form"}
                                                      isValid={touched.passwordConfirm & !errors.passwordConfirm & !errors.password}
                                                      isInvalid={!!errors.passwordConfirm}/>
                                        {passwordChangeErrorMessage}
                                        <Form.Control.Feedback
                                            type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className="loginFormButton"
                                            type="submit"
                                            value="Submit">
                                        BESTÄTIGEN
                                    </Button>
                                    <Button className="deleteProfile large-button button-grey"
                                            variant="link"
                                            onClick={this.showDeletionPopup}>
                                        KONTO LÖSCHEN
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    )
                }
            }
        } else {
            if (this.state.resetSuccessful) {
                return (
                    <div className="passwordResetSubmittedText">
                        <h4>
                            SUPER,
                        </h4>
                        <p>
                            Dein Passwort ist aktualisiert. Du kannst dich jetzt wieder mit deinem neuen Passwort
                            einloggen.<br/>
                            Bis gleich! <span role="img"
                                              aria-label="yellow-heart"> 💛</span>
                        </p>
                    </div>
                );
            } else {
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
                    <Formik validationSchema={schema}
                            initialValues={{password: "", passwordConfirm: ""}}
                            onSubmit={(values, {resetForm}) => {
                                axios.post(process.env.REACT_APP_API_URL + '/api/users/setPassword', {
                                    user: {
                                        oldPassword: values.oldPassword,
                                        password: values.password
                                    }
                                }, {
                                    withCredentials: true
                                }).then((data) => {
                                    this.setState({
                                        resetSuccessful: true
                                    });
                                }).catch(err => {
                                    resetForm();
                                    this.setState({
                                        passwordChangeError: true
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
                            <Form noValidate onSubmit={handleSubmit.bind(this)}>
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
                                                          this.setState({
                                                              passwordChangeError: false
                                                          })
                                                      }}
                                                      name="password"
                                                      type="password"
                                                      placeholder="Dein Passwort"
                                                      className={this.state.passwordChangeError ? "passwordUser login-form is-invalid" : "passwordUser login-form"}
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
                                                          this.setState({
                                                              passwordChangeError: false
                                                          })
                                                      }}
                                                      name="passwordConfirm"
                                                      type="password"
                                                      placeholder="Dein Passwort bestätigen"
                                                      className={this.state.passwordChangeError ? "passwordConfirmation login-form is-invalid" : "passwordConfirmation login-form"}
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
}