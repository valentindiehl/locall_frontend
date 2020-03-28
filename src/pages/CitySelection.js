import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FooterContainer from "./components/footer/FooterContainer";
import NavBarContainer from "./components/navbar/NavBarContainer";

import './css/cityselection/cityContainer.css';


export default class CitySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: true
            }
        }
    }

    render() {
        return (
            <>
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Container className="cityContainer">
                    <h4 className="title">Welche Stadt möchtest du anzeigen?</h4>
                    <p className="description">Da wir uns aktuell noch am Beginn der Entwicklung befinden,
                        gibt es aktuell nur Karten zu den folgenden beiden Städten. Wir arbeiten jedoch mit
                        Hochdruck daran, möglichst bald weitere Städte anzubieten.</p>

                    <Row className="citySelection">
                        <Col className="city" id="city1">
                            <Button variant="link">
                                <div className="cityName">München</div>
                                <img className="cityImage" src="/assets/images/muenchen.jpg" alt={"Karte von München"}/>
                            </Button>
                        </Col>
                        <Col className="city" id="city2">
                            <Button variant="link">
                                <div className="cityName">Würzburg</div>
                                <img className="cityImage" src="/assets/images/wuerzburg.jpg"
                                     alt={"Karte von Würzburg"}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <FooterContainer isLoggedIn={true}/>
            </>
        );
    }
}