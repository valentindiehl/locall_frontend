import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../css/registerContainer.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";



export default class RegisterContainer extends Component {

    state = {
        radio : 0
    }

    handleChange = value => () => {
        this.setState({
            radio: value

        })
        console.log(value)
    }

    render() {
        return (
            <Container fluid className="registerContainer">
                <h5 id="title">Möchtest du mithelfen?</h5>
                <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                    <ToggleButton value={0} id ={this.state.radio === 0 ? "leftButton-active" : "leftButton-inactive"} onChange={this.handleChange(0)} checked={this.state.radio === 0}>
                        <Col>
                            <Row>
                                <Image src={this.state.radio=== 0 ? "/assets/icons/icons-kunden-weiss.svg" : "/assets/icons/icons-kunden-orange.svg"} id="kunden-icon"/>
                            </Row>
                            <Row>
                                <p className={this.state.radio === 0 ? "radiobtn-active" : "radiobtn-inactive"}  id="kunden-text" >Lokale <br /> Gastronomien <br /> unterstützen</p>
                            </Row>
                        </Col>
                    </ToggleButton>
                    <ToggleButton value={1} id ={this.state.radio === 1 ? "rightButton-active" : "rightButton-inactive"} onChange={this.handleChange(1)} checked={this.state.radio === 1}>
                        <Col>
                            <Row>
                                <Image src={this.state.radio===1 ? "/assets/icons/icons-laden-weiss.svg" : "/assets/icons/icons-laden-orange.svg"} id="gastro-icon"/>
                            </Row>
                            <Row>
                                <p className={this.state.radio === 1 ? "radiobtn-active" : "radiobtn-inactive"} id="gastro-text">Meinen <br /> Laden <br /> Registrieren</p>
                            </Row>
                        </Col>
                    </ToggleButton>
                </ToggleButtonGroup>


                <Form>
                    <Form.Group controlId="formName" id="name-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image src="/assets/icons/icons-name.svg" id="name-icon"/>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Name" className="login-form"/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" id="email-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image src="/assets/icons/icons-mail.svg" id="login-icon-1"/>
                            </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="E-Mail" className="login-form"/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" id="password-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image src="/assets/icons/icons-passwort.svg" id="login-icon-2"/>
                            </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="Passwort" className="login-form"/>
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}