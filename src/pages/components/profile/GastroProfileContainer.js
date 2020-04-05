import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GastroProfile from "./GastroProfile";

import '../../css/general/general-styles.css';
import Col from "react-bootstrap/Col";

import '../../css/profile/profile.css';

export default class GastroProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Col xs="6">
                    <Container className="contentContainer">
                        <h3>Gastro Einstellungen</h3>
                        <GastroProfile paypal={this.props.paypal} description={this.props.description}/>
                    </Container>
                </Col>
        );
    }
}
