import React, {Component} from "react";
import * as Yup from "yup";
import ApiHelper from "../../../helpers/api-helper";
import LoginFormRenderer from "./LoginFormRenderer";
import {withRouter} from "react-router-dom";
import ForgotPasswordRenderer from "./ForgotPasswordRenderer";


class LoginFormComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loginError: false,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);

		this.validationSchema = Yup.object().shape({
			email: Yup.string().email("Bitte gib eine valide E-Mail-Adresse ein.").required("Bitte gib deine E-Mail-Adresse ein."),
			password: Yup.string().required("Bitte gib dein Passwort ein.")
		});
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = (_) => this.props.history.push('/app');
		const onError = (_) => {
			resetForm();
			this.setState({loginError: true});
			this.setState({errorMessage: "Diese Kombination aus Email und Passwort ist uns nicht bekannt. Hast du deine Email schon bestätigt?"})
		}
		ApiHelper().loginUser(values.email, values.password, onSuccess, onError);
	}

	handleFocus() {
		this.setState({loginError: false});
		this.setState({loginErrorMessage: null});
	}

	render() {
		return (
			<>
				<LoginFormRenderer
					validationSchema={this.validationSchema}
					onFocus={this.handleFocus}
					loginError={this.state.loginError}
					onSubmit={this.handleSubmit}
					errorMessage={this.state.errorMessage}
				/>
				<ForgotPasswordRenderer onClick={this.props.onForgotPassword} text="Passwort vergessen?"/>
			</>
		);
	}
}

export default withRouter(LoginFormComponent)
