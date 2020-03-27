import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";


import '../../css/login/loginContainer.css';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password: ''
        };
    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        console.log(this.state.email);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email);
        axios.post('/api/users/login', {"user": {"email": this.state.email, "password": this.state.password}})
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.user.token);
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <Container fluid className="loginContainer">
                <h5 id="title">Login</h5>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group controlId="formBasicEmail" id="email-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                            <Image src="/assets/icons/icons-mail.svg" id="login-icon-1"/>
                            </InputGroup.Prepend>
                            <Form.Control onChange={this.handleInputChange} type="email"  name="email" placeholder="E-Mail" className="login-form"/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" id="password-group">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Image src="/assets/icons/icons-passwort.svg" id="login-icon-2"/>
                            </InputGroup.Prepend>
                            <Form.Control onChange={this.handleInputChange} name="password" type="password" placeholder="Passwort" className="login-form"/>
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}