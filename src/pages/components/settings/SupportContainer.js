import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default class SupportContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="settings-container support">
                <div className="box-heading">
                    <img className="iconProfile" src={"/assets/icons/icons-mail.svg"} alt={"Mail-Icon"}/>
                    <h4>Support</h4>
                </div>
                <div className="white-box">
                    <h5> Du hast Fragen?</h5>
                    <h6> Wir freuen uns über deine Nachricht!</h6>
                    <Button className="large-button button-orange" variant="link" type="submit">
                        SCHREIBE UNS!
                    </Button>
                </div>
            </div>
        );
    }
}