import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../css/gastroprofil/gastroProfil.css';


export default class GastroProfil extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: {
                name: '',
                address: ''
            },

        };

    }


/*  handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        if (this.state.currentLokalName === '') {
            this.setState({
                errorMessage: 'Bitte gebe den Namen deines Lokals ein!'
            });
        }

        if (this.state.lokalArt === '') {
            this.setState({
                errorMessage: 'Bitte lege die Art deines Lokals fest!'
            });
        }

        if (this.state.lokalAdresse === '') {
            this.setState({
                errorMessage: 'Bitte gebe die Adresse deines Lokals ein!'
            });
        }
        if (this.state.lokalStadt === '') {
            this.setState({
                errorMessage: 'Bitte gebe die Stadt deines Lokals ein!'
            });
        }

        if (this.state.lokalBeschreibung === '') {
            this.setState({
                errorMessage: 'Bitte gebe eine Beschreibung für dein Lokal ein!'
            });
        } else if (this.state.lokalName.length > 150) {
            this.setState({
                errorMessage: 'Die Beschreibung für dein Lokal darf nicht mehr als 150 Zeichen besitzen!'
            })
        }

        if (this.state.lokalDankesnachricht === 'none') {
            this.setState({
                errorMessage: 'Bitte gebe eine Dankesnachricht an deine Kundinnen und Kunden fest!'
            });
        } else if (this.state.lokalName.length > 150) {
            this.setState({
                errorMessage: 'Die Dankesnachricht darf nicht mehr als 150 Zeichen besitzen!'
            })
        };*/


        render()
        {
            return (

                <div className="gastroInfoContainer">
                    <div className="headingColumn">
                        <img className="iconProfile" src="/assets/icons/edit.svg" alt={"Cafe-Icon"}/>
                        <h4> Lokalinformationen</h4>
                    </div>


                    <div className="content">
                        <Form  className="profileForm">
                            <Form.Row>
                                <Form.Group className="lokalName">
                                    <Form.Label className="label">Name des Lokals</Form.Label>
                                    <input
                                        value={this.state.data.name}
                                        type="text"
                                        className="form-control"
                                        name="lokalName"
                                        formNoValidate
                                        //onChange={}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState" className="inputForm">
                                    <Form.Label className="label">Art</Form.Label>
                                    <Form.Control as="select" value={'1'}>
                                        <option value={'1'}>Café</option>
                                        <option value={'2'}>Restaurant</option>
                                        <option value={'3'}>Bar</option>
                                        <option value={'4'}>Bäckerei</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="rowTwo">
                                <Form.Group className="inputForm">
                                    <Form.Label className="label">Adresse</Form.Label>
                                    <input
                                        value={this.state.data.address}
                                        type="text"
                                        className="form-control"
                                        name="lokalName"
                                        formNoValidate
                                        //onChange={}
                                    />
                                </Form.Group>
                                <Form.Group className="inputForm">
                                    <Form.Label className="label">Stadt</Form.Label>
                                    <input type="text" className="form-control" id="formGroupExampleInput"/>
                                </Form.Group>
                            </Form.Row>

                            <div className="textFields">
                                <Form.Group className="textForm">
                                    <Form.Label className="label">Beschreibung (max. 150 Zeichen)</Form.Label>
                                    <Form.Control className="textArea" as="textarea" rows="3"/>
                                </Form.Group>

                                <Form.Group className="textForm textForm2">
                                    <Form.Label className="label">Persönliche Dankesnachricht (max. 150
                                        Zeichen)</Form.Label>
                                    <Form.Control className="textArea" as="textarea" rows="3"/>
                                </Form.Group>
                            </div>
                        </Form>

                        <Button id="buttonSave" variant="link" type="submit" className="button-transfer"
                                style={{marginTop: "23px"}}>
                            Speichern
                        </Button>
                        <Button id="buttonExit" variant="link" type="submit" className="button-transfer"
                                style={{marginTop: "23px"}}>
                            Abbrechen
                        </Button>

                    </div>
                </div>
            );
        }
    }
