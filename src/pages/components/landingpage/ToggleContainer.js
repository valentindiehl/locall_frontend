import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/landingpage/toggleContainer.css';


export default class ToggleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="toggleContainer">
                <Row>
                    <Col className={this.props.isUser ? "userCol selected" : "userCol"} onClick={this.props.handler}>
                        <img src={this.props.isUser ? "/assets/icons/icons-kunden-white.svg": "/assets/icons/icons-kunden-gelb.svg"} alt={"User-Icon"}/>
                        <p id="userText">LOKALE GASTRONOMEN UNTERSTÜTZEN</p>
                    </Col>
                    <Col className={!this.props.isUser ? "gastroCol selected" : "gastroCol"} onClick={this.props.handler}>
                        <img src={!this.props.isUser ? "/assets/icons/icons-laden-white.svg": "/assets/icons/icons-laden-orange.svg"} alt={"Home-Icon"}/>
                        <p id="gastroText">MEINEN LADEN REGISTRIEREN</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
