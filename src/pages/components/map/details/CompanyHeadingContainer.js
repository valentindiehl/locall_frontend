import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import '../../../css/details/companyHeadingContainer.css';



export default class CompanyHeadingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="headingContainer">
                <h4 className="companyName">{ this.props.name }</h4>
                <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={<Tooltip className ="verificationToolTip">Verifiziertes Unternehmen</Tooltip>}>
                    <img src = "/assets/icons/icon-verification.svg" alt="Unternehmensverifikation"/>
                </OverlayTrigger>{' '}
            </Container>
        );
    }
}