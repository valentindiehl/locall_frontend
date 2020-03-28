import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import './css/gastrodashboard/gastroContainer.css';


export default class GastroDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="gastroContainer">
                <h3 className="title">Dashboard</h3>

                {/* First Row */}
                <Row className="firstRow">

                    {/* Column Spenden */}
                    <Col className="spenden" sm={8}>
                        <div className="headingColumn">
                            <img className="headingIcon" src="/assets/icons/geld-darkgrey.svg" alt={"Cafe-Icon"}/>
                            <h4> Übersicht Spenden</h4>
                        </div>


                        <div className="content">

                            {/* Column Spenden Gesamt */}
                            <div className="content-heading">
                                <div className="content-subheading">Gesamt:</div>
                                <div className="content-value" style={{marginRight: "20px"}}>112,50€</div>
                            </div>
                            <Row className="gesamt">
                                <Col className="section">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">28x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                            <div className="sectionDescription">kleiner Kaffee (1,50€)</div>
                                            <div className="sectionValue">42,00€</div>
                                    </div>

                                </Col>
                                <Col className="section">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">13x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                            <div className="sectionDescription">mittlerer Kaffee (3,00€)</div>
                                            <div className="sectionValue">39,00€</div>
                                    </div>
                                </Col>
                                <Col className="section section3">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">4x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                            <div className="sectionDescription">großer Kaffee (6,00€)</div>
                                            <div className="sectionValue">24,00€</div>
                                        </div>
                                    </div>

                                </Col>
                                <Col className="section section4" >
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">5x</div>
                                            <img id="icon-geld-medium" src="/assets/icons/geld.svg" alt={"Cafe-Icon"}/>
                                        </div>
                                            <div className="sectionDescription">individuelle Geldbeträge</div>
                                            <div className="sectionValue">7,50€</div>
                                    </div>
                                </Col>
                            </Row>


                            {/* Column Spenden Heute */}
                            <div className="content-heading">
                                <div className="content-subheading">Heute:</div>
                                <div className="content-value" style={{marginRight: "20px"}}>14,00€</div>
                            </div>

                            <Row className="heute">
                                <Col className="section">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">4x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">kleiner Kaffee (1,50€)</div>
                                        <div className="sectionValue">6,00€</div>
                                    </div>

                                </Col>
                                <Col className="section">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">0x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">mittlerer Kaffee (3,00€)</div>
                                        <div className="sectionValue">0,00€</div>
                                    </div>
                                </Col>
                                <Col className="section section3">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">1x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">großer Kaffee (6,00€)</div>
                                        <div className="sectionValue">6,00€</div>
                                    </div>

                                </Col>
                                <Col className="section section4">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">1x</div>
                                            <img id="icon-geld-medium" src="/assets/icons/geld.svg" alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">individuelle Geldbeträge</div>
                                        <div className="sectionValue">2,00€</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* Column Besucher */}
                    <Col className="besucher" sm={4}>
                        <div className="headingColumn">
                            <img className="headingIcon" src="/assets/icons/icons-kunden-darkgrey.svg"
                                 alt={"Kunden-Icon"}/>
                            <h4> Übersicht Besucher</h4>
                        </div>
                        <div className="content">
                            <div className="content-heading">
                                <div className="content-subheading">Gesamt:</div>
                                <div className="content-value">73</div>
                            </div>
                            <Row className="gesamt">
                                <Col sm={6} className="section sectionVisitor">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">28x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">in privaten Voice-Channels</div>
                                        <div className="sectionValue">44</div>
                                    </div>

                                </Col>
                                <Col sm={6} className="section sectionVisitor visitor2">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">13x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">in öffentlichen Voice-Channels</div>
                                        <div className="sectionValue">44</div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="content-heading">
                                <div className="content-subheading">Heute:</div>
                                <div className="content-value">13</div>
                            </div>

                            <Row className="heute">
                                <Col sm={6} className="section sectionVisitor">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">28x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">in privaten Voice-Channels</div>
                                        <div className="sectionValue">44</div>
                                    </div>
                                </Col>
                                <Col sm={6} className="section sectionVisitor visitor2">
                                    <div className="sectionWrapper">
                                        <div className="coffee">
                                            <div className="coffee-count">13x</div>
                                            <img className="icon-cafe" src="/assets/icons/cafe-grey.svg"
                                                 alt={"Cafe-Icon"}/>
                                        </div>
                                        <div className="sectionDescription">in öffentlichen Voice-Channels</div>
                                        <div className="sectionValue">44</div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>


                {/* Second Row */}
                <Row className="secondRow">

                    {/* Column Geldtransfer */}
                    <Col className="geldtransfer" sm={8}>
                        <div className="headingColumn">
                            <img className="headingIcon" src="/assets/icons/kreditkarte.svg" alt={"Kreditkarte-Icon"}/>
                            <h4> Geldtransfer</h4>
                        </div>

                        <div className="content">
                            <h5 className="content-subheading-2">Bevorzugte Bezahlmethode:</h5>
                            <Form>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check className="checkTransfer" type="checkbox" label="Lastschrift"/>
                                    <img className="lastschriftLogo" src="/assets/icons/lastschriftlogo.png" alt={"PayPal-Logo"}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check className="checkTransfer" type="checkbox" label="PayPal"/>
                                    <img className="paypalLogo" src="/assets/icons/paypal-100px.png" alt={"PayPal-Logo"}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check className="checkTransfer" type="checkbox" label="Kreditkarte"/>
                                    <img className="mastercardLogo" src="/assets/icons/visa-mastercard.png" alt={"Mastercard-Logo"}/>
                                </Form.Group>
                            </Form>

                            <div className="balance">
                                <h5 className="content-subheading-2" style={{paddingBottom: "14px"}}>Aktuelles
                                    Guthaben:</h5>
                                <h5 className="content-value" style={{textAlign: "left"}}>112,50€</h5>
                                <Button variant="link" type="submit" className="button-transfer"
                                        style={{marginTop: "23px"}}>
                                    Auf Konto überweisen
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}