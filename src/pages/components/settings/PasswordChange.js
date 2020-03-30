import React, {Component} from 'react';
import Form from "react-bootstrap/Form";


import '../../css/settings/general-styles.css';
import '../../css/settings/setting-form.css';

export default class PasswordChange extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Form.Label className="label">Passwort</Form.Label>
                <Form.Control required
                              className="old-password"
                              type="password"
                              name="password"
                              placeholder="Alter Passwort"/>
                <Form.Control required
                              type="password"
                              name="password"
                              placeholder="Neues Passwort"/>
                <Form.Control required
                              type="password"
                              name="password"
                              placeholder="Wiederhole Neues Passwort"/></>
        );
    }
}
