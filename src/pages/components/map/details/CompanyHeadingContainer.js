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
                <h4 className="companyName">{this.props.name}
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={<Tooltip className="verificationToolTip">Verifiziertes Unternehmen</Tooltip>}>
                        <span className="icon"></span>
                    </OverlayTrigger></h4>
            </Container>
        );
    }
}