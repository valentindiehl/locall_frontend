import React from "react";
import NavBarContainer from "../navbar/NavBarContainer";
import FooterContainer from "../footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SupportContainer from "./SupportContainer";
import FAQPage from "./FAQPage"

import '../../css/general/general-styles.css';
import '../../css/faq/faq.css';



export default class FAQContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
        };
    }


    render() {
        return (
            <div className="Fade">
                <NavBarContainer navbar={this.state.navbar}/>
                <Row>
                    <Col Col xs="3">
                    </Col>
                    <Col Col xs="6">
                        <Container className = "contentContainer faq">
                            <h3>FAQ</h3>
                                 <FAQPage/>
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
