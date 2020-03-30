import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";

export default class GastroForm extends React.Component {

    constructor() {
        super();
        this.state = {
            updateSuccessful: false,
            updateError: false
        }
        this.hideSuccessMessage = this.hideSuccessMessage.bind(this);
    }

    hideSuccessMessage() {
        this.setState({
            updateSuccessful: false
        });
    }

    render() {

        let updateErrorMessage;

        if (this.state.update) {
            updateErrorMessage = (
                <div className="invalid-feedback">
                    Ups, da ist wohl etwas schief gegangen. Probiere es doch später noch einmal.
                </div>
            )
        } else {
            updateErrorMessage = null;
        }

        if (this.state.updateSuccessful) {
            return (
                <div className="passwordResetSubmittedText">
                    <h4>
                        SUPER,
                    </h4>
                    <p>
                        Deine Gastrodaten sind aktualisiert und können jetzt von allen Nutzern auf deinem Gastro-Profil
                        gesehen werden.
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
                description: Yup.string().min(20, "Deine Beschreibung muss mindestens 20 Zeichen lang sein.").max(150, "Deine Beschreibung darf nicht länger als 150 Zeichen sein.").required("Bitte gib einen Beschreibungstext ein."),
                paypalname: Yup.string().required("Bitte gib deinen PayPal.me Nutzernamen ein.")
            });

            return (
                <Formik validationSchema={schema}
                        initialValues={{description: "", paypalname: ""}}
                        onSubmit={(values, {resetForm}) => {
                            axios.post(process.env.REACT_APP_API_URL /* Richtige ROUTE */, {
                                user: {
                                    /*Values übergeben*/
                                }
                            }, {
                                withCredentials: true
                            }).then((data) => {
                                this.setState({
                                    updateSuccessful: true
                                });
                            }).catch(err => {
                                resetForm();
                                this.setState({
                                    updateError: true
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
                        <Form className="profileForm"
                              noValidate
                              onSubmit={handleSubmit.bind(this)}>
                            <Form.Group className="inputForm">
                                <Form.Label className="label">Beschreibung (max. 150 Zeichen)</Form.Label>
                                <Form.Control required value={values.description}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      updateError: false
                                                  })
                                              }}
                                              as="textarea"
                                              rows="4"
                                              name="description"
                                              placeholder={this.props.description}
                                              className={this.state.updateError ? "textArea login-form is-invalid" : "textArea login-form"}
                                              isValid={touched.description & !errors.description}
                                              isInvalid={!!errors.description}/>
                                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                                <Form.Label className="label">PayPalMe-Nutzername</Form.Label>
                                <Form.Control required value={values.descripaypalnameption}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              onFocus={() => {
                                                  this.setState({
                                                      updateError: false
                                                  })
                                              }}
                                              type="name"
                                              rows="4"
                                              name="paypalname"
                                              placeholder={this.props.paypal}
                                              className={this.state.updateError ? "login-form is-invalid" : "login-form"}
                                              isValid={touched.paypalname & !errors.paypalname}
                                              isInvalid={!!errors.paypalname}/>
                                {updateErrorMessage}
                                <Form.Control.Feedback type="invalid">{errors.paypalname}</Form.Control.Feedback>
                            </Form.Group>
                            <Button className="small-button button-orange"
                                    variant="link"
                                    type="submit">
                                SPEICHERN
                            </Button>
                        </Form>
                    )}
                </Formik>
            )
        }
    }
}

