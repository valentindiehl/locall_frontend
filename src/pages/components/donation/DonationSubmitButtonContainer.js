import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import '../../css/rightside/blueButton.css';

export default class DonationSubmitButtonContainer extends Component {

    render() {
        return (
            <div style={{textAlign: "center"}}>
            <Button className = "donationSubmit blueButton" variant="primary" type="submit">
                BESTÄTIGEN
            </Button>
            </div>
        );
    }
}