import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GastroDonationContainer from "./components/gastrodashboard/GastroDonationContainer";
import GastroVisitorContainer from "./components/gastrodashboard/GastroVisitorContainer";
import GastroPaymentContainer from "./components/gastrodashboard/GastroPaymentContainer";


import './css/gastrodashboard/gastroContainer.css';


export default class GastroDashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container className="gastroContainer">

                <h3 className="title">Dashboard</h3>

                <Row className="firstRow">
                    <Col sm={8} className="spenden">
                        <GastroDonationContainer/>
                    </Col>
                    <Col sm={4} className="besucher">
                        <GastroVisitorContainer/>
                    </Col>
                </Row>
                <Row className="secondRow">
                    <Col sm={8} className="geldtransfer">
                        <GastroPaymentContainer/>
                    </Col>

                </Row>
            </Container>
        );
    }
}