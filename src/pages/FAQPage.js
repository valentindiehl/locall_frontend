import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import SupportContainer from "./components/faq/SupportContainer";

import './css/general/general-styles.css';
import './css/support/faq.css';



export default class FAQPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
            collapseID: 0
        };
        this.toggleCollapse = this.toggleCollapse.bind();
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div className="Fade">
                <NavBarContainer history={this.props.history}
                                 navbar={this.state.navbar}/>
                <Row>
                    <Col Col xs="3">

                    </Col>
                    <Col Col xs="6">
                        <Container className = "contentContainer">
                            <h3>FAQ</h3>
                            <div className="box-heading">
                                <img className="iconProfile" src={"/assets/icons/search.svg"} alt={"Suche-Icon"}/>
                                <h4>Häufig gestellte Fragen</h4>
                            </div>
                            <div className ="faqContent">
                            <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick = {this.toggleCollapse(0)} >
                                            Was kann ich als Nutzer auf LOCALL machen? <img src = {this.state.collapseID === 0 ? "assets/icons/dropdown-down.svg" : "assets/icons/dropdown-up.svg" }/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick = {this.toggleCollapse(1)}>
                                            Wie kann ich an Unternehmen spenden? <img src = {this.state.collapseID === 1 ? "assets/icons/dropdown-down.svg" : "assets/icons/dropdown-up.svg" }/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick = {this.toggleCollapse(2)}>
                                            Welche Funktionen werden noch kommen? <img src = {this.state.collapseID === 2 ? "assets/icons/dropdown-down.svg" : "assets/icons/dropdown-up.svg" }/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3" onClick = {this.toggleCollapse(3)}>
                                            Wie kann ich mich als Unternehmen für LOCALL registrieren? <img src = {this.state.collapseID === 3 ? "assets/icons/dropdown-down.svg" : "assets/icons/dropdown-up.svg" }/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {this.toggleCollapse(4)}>
                                            Kostet es etwas, mich als Unternehmer auf LOCALL zu registrieren? <img src = {this.state.collapseID === 4 ? "assets/icons/dropdown-down.svg" : "assets/icons/dropdown-up.svg" }/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        <SupportContainer/>
                        </Container>
                    </Col>
                    <Col Col xs="3">

                    </Col>

                </Row>
                <FooterContainer isLoggedIn={true}/>
            </div>
        );
    }
}