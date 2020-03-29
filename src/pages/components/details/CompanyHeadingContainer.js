import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/details/companyHeadingContainer.css';



export default class CompanyHeadingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="headingContainer">
                <h4 className="companyName">{ this.props.name }</h4>
            </Container>
        );
    }
}