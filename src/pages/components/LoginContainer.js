import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../css/loginContainer.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";


export default class LoginContainer extends Component {
    render() {
        return (
            <Container fluid className="loginContainer">
                <h5 id="title">Login</h5>
                <Form onSubmit={this.props.onSubmit}>
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