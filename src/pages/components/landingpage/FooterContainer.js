import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../../css/landingpage/footerContainer.css';


export default class FooterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            })
        });
    }

    render() {
        return (
            <Container fluid className="footerContainer">
                <footer>
                    <Row className="logoRow">
                        <Col md={12} lg={4}>
                            <a href="https://www.codevscovid19.org/" target="_blank" rel="noopener noreferrer">
                                <img className="footerLogos codeVsCovidLogo" src="/assets/images/codevscovid.png"
                                     alt={"CodeVsCovidLogo"}/>
                            </a>
                        </Col>
                        <Col md={12} lg={4}>
                            <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
                                <img className="footerLogos wirVsVirusLogo" src="/assets/images/wirvsvirus.jpg"
                                     alt={"WirVsVirusLogo"}/>
                            </a>
                        </Col>
                        <Col md={12} lg={4}>
                            <a href="https://covid-global-hackathon.devpost.com/" target="_blank" rel="noopener noreferrer">
                                <img className="footerLogos globalHackathonLogo"
                                     src="/assets/images/globalhackathon.jpg" alt={"GlobalHackathonLogo"}/>
                            </a>
                        </Col>
                    </Row>
                    <a href="https://adabay.rocks" target="_blank" rel="noopener noreferrer">
                        <img className="adabayLogo" src="/assets/icons/adabayLogo.png" alt={"AdabayLogo"}/>
                        <p className="adabayHosting">HOSTED BY ADABAY GMBH <br/>
                            DIGITAL MEDIA AGENCY</p>
                    </a>
                    <SocialLinks isHidden={this.state.width > 1024}/>
                    <p className="copyright">&copy; 2020 LOCALL</p>
                    <FooterLinks/>
                </footer>
            </Container>
        );
    }
}
