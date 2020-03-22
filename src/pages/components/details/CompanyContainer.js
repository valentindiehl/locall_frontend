import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";

import '../../css/details/companyContainer.css';
import ComanyActionContainer from "./ComanyActionContainer";


export default class CompanyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="companyContainer">
                <ComanyActionContainer/>
                <CompanyHeadingContainer/>
                <CompanyImageContainer/>
                <CompanyDescriptionContainer/>
                <CompanyButtonContainer/>
            </Container>
        );
    }
}