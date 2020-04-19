import React from "react";
import LoginContainer from "./components/login/LoginContainer";
import {withRouter} from "react-router-dom";


class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			navbar: {
				hideLogin: false,
				isLoggedIn: false
			}
		}
	}

	componentDidMount() {
		this.setState({verificationSuccess: this.props.location && this.props.location.state && this.props.location.state.verification});
	}

	render() {
		return (
			<div style={{minHeight: "100vh"}} className="Fade">
				<LoginContainer verificationSuccess={this.state.verificationSuccess}/>
			</div>
		);
	}
}

export default withRouter(LoginPage)
