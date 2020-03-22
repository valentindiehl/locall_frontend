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
                    »Wir haben ab 21.03. geschlossen. Wir danken allen für die Unterstützung. Bleibt gesund und bis bald!
                    Euer Lola-Team«
                </p>
            </Container>
        );
    }
}