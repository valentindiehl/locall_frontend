import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PasswordChangeForm from "./components/profile/PasswordChangeForm";

import './css/pages/passwordResetPage.css';


export default class PasswordResetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
            hideHeading: false
        };
        this.setHideHeading = this.setHideHeading.bind(this);
    }

    setHideHeading() {
        this.setState({
            hideHeading: true
        })
    }

    render() {
        let heading;
        if(this.hideHeading) {
            heading = null;
        } else {
            heading = <h4>Passwort zurücksetzen</h4>
        }
        return (
            <div className="Fade">
                <NavBarContainer history={this.props.history} navbar={this.state.navbar}/>
                <Container fluid>
                    <Row className="coronaRow">
                        <Col className="passwordResetCol" md={6}>
                            <Container className="registerContainer passwordResetContainer">
                                {heading}
                                <PasswordChangeForm isPasswordChange={false} setHideHeading={this.setHideHeading} token={this.props.match.params.token}/>
                            </Container>

                        </Col>
                        <Col className="coronaImage" md={6}>
                            <img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
                        </Col>
                    </Row>
                </Container>
                <FooterContainer isLoggedIn={false}/>
            </div>
        );
    }
}