import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../css/gastrodashboard/gastroContainer.css';


export default class GastroDonationContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="donationContainer">
                {/* Column Spenden */}
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
                            <Col className="section section4">
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
            </div>
        );
    }
}
