import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/details/companyImageContainer.css';


export default class CompanyImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="companyImageContainer">
                <img width="310px" src="/assets/images/cafe-image.jpg" alt={"Cafe-Image"}/>
            </Container>
        );
    }
}