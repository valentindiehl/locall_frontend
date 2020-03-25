import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";

import '../../css/navbar/landingPageNavBar.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class LandingPageNavBar extends Component {
    render() {
        return <Navbar className="landingPageNavBar">
            <Navbar.Brand href="#home" className="brandImage">
                <img
                    src="/assets/icons/logo-locall.svg"
                    width="170px"
                    height="auto"
                    className="d-inline-block align-center"
                    alt="Locall Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <a className="socialLink youtubeLink" href="https://www.youtube.com/channel/UC03F9KBob59KmBNPuQXUfqQ" target="_blank">
                    <Row>
                        <Col className="socialImage">
                            <img
                                src="/assets/icons/icons-social-you-tube.svg"
                                width="54px"
                                height="54px"
                                className="d-inline-block align-center"
                                alt="Locall Logo"
                            />
                        </Col>
                        <Col className="socialText">
                            <p>YOUTUBE</p>
                        </Col>
                    </Row>
                </a>
                <a className="socialLink instagramLink" href="https://www.instagram.com/locall_map/" target="_blank">
                    <Row>
                        <Col className="socialImage">
                            <img
                                src="/assets/icons/icons-social-instagram.svg"
                                width="54px"
                                height="54px"
                                className="d-inline-block align-center"
                                alt="Locall Logo"
                            />
                        </Col>
                        <Col className="socialText">
                            <p>INSTAGRAM</p>
                        </Col>
                    </Row>
                </a>
                <a className="socialLink facebookLink" href="https://www.facebook.com/locall.map/" target="_blank">
                    <Row>
                        <Col className="socialImage">
                            <img
                                src="/assets/icons/icons-social-facebook.svg"
                                width="54px"
                                height="54px"
                                className="d-inline-block align-center"
                                alt="Locall Logo"
                            />
                        </Col>
                        <Col className="socialText">
                            <p>FACEBOOK</p>
                        </Col>
                    </Row>
                </a>
                <Navbar.Brand href="/login" className="profileImage">
                    <div className="profileImageBackground rounded-circle">
                        <img
                            src="/assets/icons/valle.svg"
                            width="54px"
                            height="54px"
                            className="d-inline-block align-center rounded-circle"
                            alt="Locall Logo"
                        />
                    </div>
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>;
    }
}