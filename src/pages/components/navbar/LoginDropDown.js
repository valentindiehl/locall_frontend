import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginContainer from "../login_register/LoginContainer";


export default class LoginDropDown extends Component {

    render() {
        if (this.props.isHidden) {
            return null;
        } else {
            return (
                <NavDropdown
                    alignRight title={
                    <Container className="dropDownContainer">
                        <Row className="dropDownRow">
                            <Col md={6}>
                                <p className="profileNavBarText">LOGIN</p>
                            </Col>
                            <Col md={6}>
                                <Navbar.Brand className="profileImage">
                                    <img
                                        src="/assets/icons/ohne-profilbild.svg"
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
                    <LoginContainer history={this.props.history}/>
                </NavDropdown>
            )
        }
    }
}