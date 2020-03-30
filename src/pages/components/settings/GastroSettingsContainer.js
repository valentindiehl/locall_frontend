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
    }

    render() {
        return (
            <Col xs="6">
                <Container className="settings">
                    <h3>Gastro Einstellungen</h3>
                    <GastroProfile/>
                </Container>
            </Col>
        );
    }
}
