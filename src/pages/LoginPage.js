import React from "react";
import InfoContainer from "./components/landingpage/InfoContainer";
import Container from "react-bootstrap/Container";
import NavBarContainer from "./components/navbar/NavBarContainer";
import RegisterContainer from "./components/registration/RegisterContainer";
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
            <div className="Fade">
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
