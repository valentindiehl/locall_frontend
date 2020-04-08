import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {fetchAuth} from "../../../redux/actions/userActions";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch({ type: "SET_AUTHENTICATION_MANUAL", payload: false}),
    }
};

class ProfileDropDown extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        axios.delete(process.env.REACT_APP_API_URL + '/v1/auth', {
            withCredentials: true
        })
            .then(res => {
                if (res.status === 204 || res.status === 304) {
                    this.props.logOut();
                    this.props.history.push('/login');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging out please try again');
            });
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
                                    src="/assets/icons/profilbild-profilbild-gelb.svg"
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
                <NavDropdown.Item href="/faq">
                    <Row>
                        <Col md={2} className="dropDownIconCol">
                            <img
                                src="/assets/icons/support.svg"
                                width="18px"
                                height="18px"
                                className="d-inline-block align-center"
                                alt="Support"
                            />
                        </Col>
                        <Col md={10}>
                            Support
                        </Col>
                    </Row>
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile">
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
                <NavDropdown.Item onClick={this.handleLogout}>
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

export default connect(null, mapDispatchToProps)(ProfileDropDown);