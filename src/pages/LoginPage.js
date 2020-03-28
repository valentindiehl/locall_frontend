import React from "react";
import InfoContainer from "./components/landingpage/InfoContainer";
import Container from "react-bootstrap/Container";
import NavBarContainer from "./components/navbar/NavBarContainer";

import '../pages/css/pages/loginPage.css';
import RegisterContainer from "./components/login/RegisterContainer";
import FooterContainer from "./components/footer/FooterContainer";


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            }
        }
    }

    render() {
        return (
            <div>
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Container className="landingPageContainer">
                    <InfoContainer/>
                    <RegisterContainer history={this.props.history}/>
                </Container>
                <FooterContainer isLoggedIn={false}/>
            </div>
        );
    }
}
