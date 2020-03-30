import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import PasswordChange from "./PasswordChange";
import Button from "react-bootstrap/Button";


export default class GastroProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="settings-container">
                <div className="box-heading">
                    <img className="iconProfile" src={"/assets/icons/edit.png"} alt={"Edit-Icon"}/>
                    <h4> Lokalinformationen bearbeiten</h4>
                </div>
                <div className="white-box">
                    <Form className="profileForm">
                        <Form.Group className="inputForm">
                            <Form.Label className="label">Beschreibung (max. 150 Zeichen)</Form.Label>
                            <Form.Control
                                className="textArea"
                                as="textarea"
                                rows="4"
                                onChange={this.handleChange}
                            />
                            <Form.Label className="label">PayPalMe-Link</Form.Label>
                            <img src=""/>
                            <Form.Control required
                                          type="link"
                                          name="links"
                                          placeholder="PaypalMe_Link"/>
                            <Button className="small-button button-orange" variant="link" type="submit">
                                SPEICHERN
                            </Button>
                            <Button className="deleteProfile large-button button-grey" variant="link" type="submit">
                                KONTO LÖSCHEN
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}