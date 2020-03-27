import React from "react";
import InfoContainer from "./components/landingpage/InfoContainer";
import SignUpContainer from "./components/landingpage/SignUpContainer";
import Container from "react-bootstrap/Container";
import NavBarContainer from "./components/navbar/NavBarContainer";

import '../pages/css/pages/landingPage.css';


export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                showLogin: false,
                isLoggedIn: false
            }
        }
    }

    render() {
        return (
            <div>
                <NavBarContainer navbar= {this.state.navbar}/>
                <Container className="landingPageContainer">
                    <InfoContainer/>
                    <SignUpContainer/>
                </Container>
            </div>
        );
    }
}
