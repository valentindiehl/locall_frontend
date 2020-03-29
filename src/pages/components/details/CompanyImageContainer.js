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
                     src="https://cdn.eventinc.de/provider_pictures/pictures/000/097/081/cropped/eventlocation-55eleven-muenchen.jpg?1553266048"
                     alt={"Cafe from inside"}/>
            </Container>
        );
    }
}