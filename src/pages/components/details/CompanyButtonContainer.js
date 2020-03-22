import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../../css/details/companyButtonContainer.css';


export default class CompanyButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="companyButtonContainer">
                <h5>Möchtest du Café Lola unterstützen?</h5>
                <Row className="buttonRow">
                    <Col className="buttonCol">
                        <img src="/assets/icons/spenden.svg" alt={"Spende-Icon"}/>
                    </Col>
                    <Col className="buttonCol">
                        <img src="/assets/icons/betreten.svg" alt={"Betreten-Icon"}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}