import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import './css/pages/passwordResetPage.css';
import PasswordForgotFormComponent from "./components/profile/password/PasswordForgotFormComponent";
import {withRouter} from "react-router-dom";


class PasswordResetPage extends React.Component {
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
							<img src={"/assets/images/laden.png"} alt={"Illustration mit Luftballons"}/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default withRouter(PasswordResetPage)
