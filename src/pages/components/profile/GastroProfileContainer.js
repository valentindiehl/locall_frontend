import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GastroProfile from "./GastroProfile";
import SupportContainer from "./SupportContainer";
import NavBarContainer from "../navbar/NavBarContainer";
import FooterContainer from "../footer/FooterContainer";

import '../../css/settings/general-styles.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActionContainerLeft from "./ActionContainerLeft";
import UserProfile from "./UserProfile";
import ActionContainerRight from "./ActionContainerRight";
import GastroForm from "./GastroForm";

export default class GastroProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col xs="6">
                <Container className="settings">
                    <h3>Gastro Einstellungen</h3>
                    <GastroProfile paypal={this.props.paypal} description={this.props.description}/>
                </Container>
            </Col>
        );
    }
}
