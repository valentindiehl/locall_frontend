import React from "react";
import NavBarContainer from "./components/navbar/NavBarContainer";
import FooterContainer from "./components/footer/FooterContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PasswordChangeFormComponent from "./components/profile/password/PasswordChangeFormComponent";

import './css/pages/passwordResetPage.css';
import PasswordForgotFormComponent from "./components/profile/password/PasswordForgotFormComponent";


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
		if (this.state.hideHeading) {
			heading = null;
		} else {
			heading = <h4>Passwort zurücksetzen</h4>
		}
		return (
			<div className="Fade">
				<Container fluid>
					<Row className="coronaRow">
						<Col className="passwordResetCol" md={6}>
							<Container className="registerContainer passwordResetContainer">
								{heading}
								<PasswordForgotFormComponent
									token={this.props.match.params.token}/>
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
