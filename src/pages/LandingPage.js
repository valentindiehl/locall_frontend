import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import InfoContainer from "./components/landingpage/InfoContainer";
import SignUpContainer from "./components/landingpage/SignUpContainer";
import FooterContainer from "./components/landingpage/FooterContainer";
import Container from "react-bootstrap/Container";

import '../pages/css/pages/landingPage.css';


export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div>
                <NavBarContainer {...this.state}/>
                <Container className="landingPageContainer">
                    <InfoContainer/>
                    <SignUpContainer/>
                    <FooterContainer/>
                </Container>
            </div>
        );
    }
}