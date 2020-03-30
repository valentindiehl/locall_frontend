import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GastroProfile from "./GastroProfileSetting";
import SupportContainer from "./SupportContainer";
import NavBarContainer from "../navbar/NavBarContainer";
import FooterContainer from "../footer/FooterContainer";

import '../../css/settings/general-styles.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActionContainerLeft from "./ActionContainerLeft";
import UserProfile from "./UserProfileSettings";
import ActionContainerRight from "./ActionContainerRight";

export default class GastroSettingsContainer extends Component {
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
                    <Col xs="3"><ActionContainerLeft/></Col>
                    <Col xs="6">
                        <Container className="settings">
                            <h3>Gastronomieprofil</h3>
                            <GastroProfile/>
                        </Container>
                    </Col>
                    <Col xs="3"><ActionContainerRight/></Col>
                </Row>
                <FooterContainer isLoggedIn={true}/>
            </>
        );
    }
}
