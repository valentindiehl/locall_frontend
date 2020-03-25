import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../../css/landingpage/infoContainer.css';


export default class InfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="infoContainer">
                <Row className="coronaRow">
                    <Col className="coronaText" md={6}>
                        <h4>Die Auswirkungen von Corona</h4>
                        <p>Durch die Corona-Krise erfahren kleine Gastronomien und Unternehmen eine Negativspirale
                            aus
                            Zahlungsausfällen, Kündigungen, steigenden Kostenbelastungen und letztlich Insolvenzen.
                            Aufgrund der <b>Ausgangsbeschränkung</b> können ihre Kundinnen und Kunden sie nicht mehr
                            unterstützen. Eine <b>Plattform</b> ist notwendig, in denen die Bürgerinnen und Bürger
                            weiterhin
                            ihr Lieblingscafé/-restaurant oder ihre Lieblingsbar virtuell besuchen können mit der
                            Kombination aus finanzieller <b>Unterstützung</b> durch Spenden.</p>

                    </Col>
                    <Col className="coronaImage" md={6}>
                        <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="solutionImage" md={6}>
                        <img src="/assets/images/laden2.png" alt={"Illustration mit Luftballons"}/>
                    </Col>
                    <Col className="solutionText" md={6}>
                        <Container>
                            <h4>Unser Lösungsansatz</h4>
                            <p>Wir wollen Euch trotz Ausgangsbeschränkung ein <b>Sozialleben</b> ermöglichen und
                                gleichzeitig
                                 <b> lokale Gastronomien</b> vor dem Corona-Aus retten. Auf der interaktiven
                                (Web-)Plattform
                                locall
                                verbinden wir so <b>Solidarität</b> mit der Aufrechterhaltung des (persönlichen)
                                sozialen
                                Netzwerkes. </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}