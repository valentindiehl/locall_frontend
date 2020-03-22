import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import CompanyActionContainer from "./ComanyActionContainer";

import '../../css/details/companyContainer.css';


export default class CompanyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="companyContainer">
                <CompanyActionContainer/>
                <CompanyHeadingContainer/>
                <CompanyImageContainer/>
                <CompanyDescriptionContainer/>
                <CompanyButtonContainer/>
            </Container>
        );
    }
}