import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserProfile from "./UserProfile";
import SupportContainer from "./SupportContainer";
import NavBarContainer from "../navbar/NavBarContainer";
import FooterContainer from "../footer/FooterContainer";
import ActionContainerLeft from "./ActionContainerLeft"
import ActionContainerRight from "./ActionContainerRight"

import '../../css/settings/general-styles.css';

export default class UserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Fade">
                <Col xs="6">
                    <Container className="settings">
                        <h3>Profil Einstellungen</h3>
                        <UserProfile history={this.props.history} token={this.props.token}/>
                        <SupportContainer/>
                    </Container>
                </Col>
            </div>
        );
    }
}
