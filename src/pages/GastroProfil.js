import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GastroInfoContainer from "./components/gastroprofil/GastroInfoContainer";

import './css/gastroprofil/gastroProfil.css';


export default class GastroProfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }




    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => this.setState({data: res}));
    }



    render() {
        return (
            <Container className="profilContainer">
                <h3>Profil bearbeiten</h3>

                <Row className="firstRow">

                    <Col className="spenden">
                        <GastroInfoContainer />
                    </Col>
                </Row>


                {/*<Row className="secondRow">
                    <Col className="geldtransfer">
                        <div className="headingColumn">
                            <img className="iconProfile" src="/assets/icons/kreditkarte.svg" alt={"Kreditkarte-Icon"}/>
                            <h4> Zahlungsinformationen</h4>
                        </div>

                        <div className="content">
                            <h5 className="content-subheading-2">Bevorzugte Bezahlmethode:</h5>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check className="checkTransfer" type="checkbox" label="PayPal"/>
                                    <img className="paypalLogo" src="/assets/icons/paypal-100px.png"
                                         alt={"PayPal-Logo"}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check className="checkTransfer" type="checkbox" label="Klarna"/>
                                    <img className="klarnaLogo" src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.png"
                                         alt={"Klarna-Logo"}/>
                                </Form.Group>
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
                    </Col>
                </Row>*/}
            </Container>
        );
    }
}