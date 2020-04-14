import React from "react";
import InfoContainer from "./components/landingpage/InfoContainer";
import SignUpContainer from "./components/landingpage/SignUpContainer";
import Container from "react-bootstrap/Container";

import '../pages/css/pages/landingPage.css';


export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                isLoggedIn: false,
                hideLogin: true
            }
        }
    }

    render() {
        return (
            <div>
                <Container className="landingPageContainer">
                    <InfoContainer/>
                    <SignUpContainer/>
                </Container>
            </div>
        );
    }
}
