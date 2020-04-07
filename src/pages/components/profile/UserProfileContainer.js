import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserProfile from "./UserProfile";
import SupportContainer from "../faq/SupportContainer";

import '../../css/general/general-styles.css';
import '../../css/profile/profile.css';

export default class UserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <Col xs="6">
                    <Container className="contentContainer">
                        <h3>Profil Einstellungen</h3>
                        <UserProfile history={this.props.history} token={this.props.token}/>
                    </Container>
                </Col>
        );
    }
}
