import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/details/companyDescriptionContainer.css';


export default class CompanyDescriptionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="companyDescriptionContainer">
                <h5>Nachricht vom Inhaber:</h5>
                <p>
                    {this.props.description}
                </p>
            </Container>
        );
    }
}