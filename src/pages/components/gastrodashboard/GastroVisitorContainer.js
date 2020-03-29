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
            <div className="visitorContainer">
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
            </div>
        );
    }
}
