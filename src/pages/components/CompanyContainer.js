import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../css/companyContainer.css';


export default class CompanyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="companyContainer"/>
        );
    }
}