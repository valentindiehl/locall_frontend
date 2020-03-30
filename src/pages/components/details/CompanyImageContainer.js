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
                <img width="100%"
                     src={"/assets/images/businesses/" + this.props.id + ".jpg"}
                     alt={"Cafe from inside"}/>
            </Container>
        );
    }
}