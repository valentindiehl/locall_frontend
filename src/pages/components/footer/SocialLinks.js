import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {Component} from 'react';

import '../../css/footer/socialLinks.css';

export default class SocialLinks extends Component {

    render() {
        if (this.props.isHidden) {
            return null;
        } else {
            return (
                <Container className="socialLinksContainer">
                    <a className="socialLink youtubeLink"
                       href="https://www.youtube.com/channel/UC03F9KBob59KmBNPuQXUfqQ"
                       target="_blank"
                       rel="noopener noreferrer">
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
                    <a className="socialLink instagramLink" href="https://www.instagram.com/locall_map/"
                       target="_blank"
                       rel="noopener noreferrer">
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
                    <a className="socialLink facebookLink" href="https://www.facebook.com/locall.map/" target="_blank"
                       rel="noopener noreferrer">
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
                </Container>
            );
        }
    }
}
