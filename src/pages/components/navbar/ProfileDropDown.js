import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import '../../css/navbar/profileDropDown.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export default class ProfileDropDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavDropdown className="profileDropdownMenu" alignRight title={
                <Container className="dropDownContainer">
                    <Row className="dropDownRow">
                        <Col md={6}>
                            <p className="profileNavBarText">PROFIL</p>
                        </Col>
                        <Col md={6}>
                            <Navbar.Brand className="profileImage">
                                <img
                                    src="/assets/icons/valle.svg"
                                    width="54px"
                                    height="54px"
                                    className="d-inline-block align-center rounded-circle"
                                    alt="Login"
                                />
                            </Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            } id="collasible-nav-dropdown">
                <NavDropdown.Item href="/settings">
                    <Row>
                        <Col md={2} className="dropDownIconCol">
                            <img
                                src="/assets/icons/settings.svg"
                                width="18px"
                                height="18px"
                                className="d-inline-block align-center"
                                alt="Login"
                            />
                        </Col>
                        <Col md={10}>
                            Einstellungen
                        </Col>
                    </Row>
                </NavDropdown.Item>
                <NavDropdown.Item href="/logout">
                    <Row>
                        <Col md={2} className="dropDownIconCol">
                            <img
                                src="/assets/icons/logout.svg"
                                width="18px"
                                height="18px"
                                className="d-inline-block align-center"
                                alt="Login"
                            />
                        </Col>
                        <Col md={10}>
                            Abmelden
                        </Col>
                    </Row>
                </NavDropdown.Item>
            </NavDropdown>
        )
    }


}