import React, {Component} from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginContainer from "../login/LoginContainer";

import '../../css/navbar/loginDropDown.css';


export default class LoginDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            passwordLost: {
                show: false,
                submitted: false
            }
        });
        this.updatePasswordLostView = this.updatePasswordLostView.bind(this);
    }

    updatePasswordLostView(passwordLost) {
        console.log(passwordLost)
        this.setState({
            passwordLost: {
                show: passwordLost.show,
                submitted: passwordLost.submitted
            }
        })
    }

    render() {
        console.log(this.state.passwordLost.show);
        let className;
        if (this.state.passwordLost.show) {
            className = "passwordDropdownMenu";
        } else if (this.state.passwordLost.submitted) {
            className = "passwordSubmittedDropdownMenu";
        } else {
            className = "loginDropdownMenu";
        }
        if (this.props.isHidden) {
            return null;
        } else {
            return (
                <NavDropdown className={className}
                             alignRight title={
                    <Container className="dropDownContainer">
                        <Row className="dropDownRow">
                            <Col md={6}>
                                <p className="profileNavBarText">LOGIN</p>
                            </Col>
                            <Col md={6}>
                                <Navbar.Brand className="profileImage">
                                    <img
                                        src="/assets/icons/ohne-profilbild.svg"
                                        width="54px"
                                        height="54px"
                                        className="d-inline-block align-center rounded-circle"
                                        alt="Login"
                                    />
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Container>
                } id="collasible-nav-dropdown">
                    <LoginContainer updatePasswordLostView={this.updatePasswordLostView}
                                    passwordLost={this.state.passwordLost}/>
                </NavDropdown>
            )
        }
    }
}