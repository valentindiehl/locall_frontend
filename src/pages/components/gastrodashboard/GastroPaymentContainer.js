import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../css/gastrodashboard/gastroContainer.css';
import '../../css/gastrodashboard/gastroPaymentContainer.css';


export default class GastroDonationContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="paymentContainer">
                    <div className="headingColumn">
                        <img className="headingIcon" src="/assets/icons/kreditkarte.svg" alt={"Kreditkarte-Icon"}/>
                        <h4> Geldtransfer</h4>
                    </div>

                    <div className="content">
                        <h5 className="content-subheading-2">Bevorzugte Bezahlmethode:</h5>
                        <Form>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className="checkTransfer" type="checkbox" label="PayPal"/>
                                <img className="paypalLogo" src="/assets/icons/paypal-100px.png" alt={"PayPal-Logo"}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className="checkTransfer" type="checkbox" label="Klarna"/>
                                <img className="klarnaLogo" src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.png"
                                     alt={"Klarna-Logo"}/>
                            </Form.Group>
                        </Form>

                        <div className="balance">
                            <h5 className="content-subheading-2" style={{paddingBottom: "14px"}}>Aktuelles
                                Guthaben:</h5>
                            <h5 className="content-value" style={{textAlign: "left"}}>112,50€</h5>
                            <Button /*onClick={this.handleClick()}*/ variant="link" type="submit" className="button-transfer"
                                                                     style={{marginTop: "23px"}}>
                                Auf Konto überweisen
                            </Button>
                        </div>
                    </div>
            </div>
        );
    }
}
