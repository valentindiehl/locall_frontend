import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

import '../../css/landingpage/footerContainer.css';

export default class FooterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container fluid className="footerContainer">
                <footer>
                    <a href="https://adabay.rocks" target="_blank">
                        <img className="adabayLogo" src="/assets/icons/adabayLogo.png" alt={"AdabayLogo"}/>
                        <p className="adabayHosting">HOSTED BY ADABAY</p>
                    </a>
                    <p className="copyright">&copy; 2020 locall</p>
                </footer>
            </Container>
        );
    }
}