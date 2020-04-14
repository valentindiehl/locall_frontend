import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import './css/pages/passwordResetPage.css';


export default class BusinessOnboardingPage extends React.Component {
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
                <Container fluid>
                    <Row className="coronaRow">
                        <Col className="passwordResetCol" md={6}>
                            <Container className="registerContainer passwordResetContainer">
                                <div className="passwordResetSubmittedText">
                                    <h4>
                                        SUPER,
                                    </h4>
                                    <p>
                                        Wir haben deine Registrierung erhalten und melden uns in Kürze per Email bei dir.
                                    </p>
                                </div>
                            </Container>
                        </Col>
                        <Col className="coronaImage" md={6}>
                            <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
