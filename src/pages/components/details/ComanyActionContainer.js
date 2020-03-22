import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/details/companyActionContainer.css';



export default class CompanyActionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="actionContainer">
                <img src="/assets/icons/close.svg" alt={"Close-Icon"}/>
            </Container>
        );
    }
}