import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/details/companyHeadingContainer.css';



export default class CompanyHeadingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="headingContainer">
                <h4 className="companyName">Café Lola</h4>
                <Row className="companyInfo">
                    <Col>
                        <Row className="infoRow">
                            <Col className="infoImageHolder" md="auto">
                                <img src="/assets/icons/kunden.svg" alt={"Cafe-Icon"}/>
                            </Col>
                            <Col className="infoNameHolder" md="auto">
                                <p>85 KUNDEN</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="infoRow">
                            <Col className="infoImageHolder" md="auto">
                                <img src="/assets/icons/geld.svg" alt={"Cafe-Icon"}/>
                            </Col>
                            <Col className="infoNameHolder" md="auto">
                                <p>93 SPENDEN</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}