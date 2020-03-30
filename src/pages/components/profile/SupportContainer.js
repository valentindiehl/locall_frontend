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
                    <img className="iconProfile" src={"/assets/icons/icons-mail-dark.svg"} alt={"Mail-Icon"}/>
                    <h4>Support</h4>
                </div>
                <div className="white-box">
                    <div className="passwordResetSubmittedText">
                        <h4>FRAGEN?</h4>
                        <p>Wir freuen uns auf deine Nachricht.</p>
                        <Button className="large-button button-orange" variant="link" onClick={()=> window.open("https://locall.atlassian.net/servicedesk/customer/portals", "_blank")}>
                            SCHREIB UNS
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}