import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


import '../../css/settings/general-styles.css';
import '../../css/settings/setting-form.css';
import PasswordChange from "./PasswordChange";

export default class UserProfileSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="settings-container">

                <div className="box-heading">
                    <img className="iconProfile" src={"/assets/icons/edit.png"} alt={"Edit-Icon"}/>
                    <h4>Kontoeinstellungen bearbeiten</h4>
                </div>

                <div className="white-box">
                    <Form className="profileForm">
                        <Form.Group className="inputForm">
                            <Form.Label className="label">E-Mail</Form.Label>
                            <Form.Control required
                                          type="email"
                                          name="email"
                                          placeholder="Deine Email"/>
                            <PasswordChange/>
                            <Button className="small-button button-orange" variant="link" type="submit"
                            >
                                SPEICHERN
                            </Button>
                            <Button className="deleteProfile large-button button-grey" variant="link" type="submit"
                            >
                                KONTO LÖSCHEN
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}