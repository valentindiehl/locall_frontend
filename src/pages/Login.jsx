// Login.jsx
import React, { Component } from 'react';
import axios from 'axios';
import LoginContainer from "./components/LoginContainer";
import RegisterContainer from "./components/RegisterContainer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Login extends Component {
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
    onSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/users/login', { "user": { "email": this.state.email, "password": this.state.password }})
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

        /* fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                "user": {
                    "email": this.state.email,
                    "password": this.state.password
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            }); */
    }
    render() {
        return (

            /*<form onSubmit={this.onSubmit}>
                <h1>Login Below!</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit"/>
            </form>*/
            <div className="contentWrapper">
                <Col>
                    <Row><LoginContainer history={this.props.history}/></Row>
                    <Row><RegisterContainer/></Row>
                </Col>
            </div>
        );
    }
}