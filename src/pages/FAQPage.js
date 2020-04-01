import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './css/pages/passwordResetPage.css';


export default class FAQPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            }
        };
    }

    render() {
        return (
            <div className="Fade">
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Container fluid>

                    <Row className="coronaRow">
                        <Col className="passwordResetCol" md={6}>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Was kann ich als Nutzer auf LOCALL machen?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Wie kann ich an Unternehmen spenden?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Welche Funktionen werden noch kommen?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        Wie kann ich mich als Unternehmen für LOCALL registrieren?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Kostet es etwas, mich als Unternehmer auf LOCALL zu registrieren?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col className="coronaImage" md={6}>
                            <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>

                <FooterContainer isLoggedIn={false}/>
            </div>
        );
    }
}