import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../../css/details/companyLiveStream.css';


export default class CompanyLiveStream extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="companyLiveStream">
                <h5>Jetzt live! Barista-Workshop</h5>
                <img src = "/assets/icons/event.svg"/>
                <p>Das Café Lola lädt ein zu einem Workshop mit unserem Chef-Barista Ferdinand!
                    Nach einer theoretischen Einführung liegen die Schwerpunkte in der Einstellung der Mühle, der Zubereitung von Espresso und dem richtigen Aufschäumen von Milch sowie dem Gießen einiger Latte Grundformen. Wir freuen uns auf euch!</p>
            </Container>
        );
    }
}

