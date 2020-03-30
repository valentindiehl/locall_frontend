import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserProfile from "./UserProfileSettings";
import SupportContainer from "./SupportContainer";
import NavBarContainer from "../navbar/NavBarContainer";
import FooterContainer from "../footer/FooterContainer";
import ActionContainerLeft from "./ActionContainerLeft"
import ActionContainerRight from "./ActionContainerRight"

import '../../css/settings/general-styles.css';

export default class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                isLoggedIn: true
            }
        }
    }

    render() {
        return (
            <>
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Row>
                    <Col xs="3"><ActionContainerLeft isUser={true}/></Col>
                    <Col xs="6">
                        <Container className="settings">
                            <h3>Profileinstellungen</h3>
                            <UserProfile token={this.props.match.params.token}/>
                            <SupportContainer/>
                        </Container>
                    </Col>
                    <Col xs="3"><ActionContainerRight/></Col>
                </Row>
                <FooterContainer isLoggedIn={true}/>
            </>
        );
    }
}
