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

        console.log(this.props.data)
    }

    render() {
        return (
            <Container fluid className="companyContainer" >
                <CompanyActionContainer/>
                <CompanyHeadingContainer name={this.props.data.name} supporter={this.props.data.supporter_counter} donations={this.props.data.donation_counter}/>
                <CompanyImageContainer image={this.props.data.image_url}/>
                <CompanyDescriptionContainer message={this.props.data.message}/>
                <CompanyButtonContainer name={this.props.data.name}/>
            </Container>
        );
    }
}