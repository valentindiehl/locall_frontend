import React, {Component} from "react";
import * as Yup from "yup";
import PasswordResetFeedbackRenderer from "./PasswordResetFeedbackRenderer";
import ForgotPasswordRenderer from "./ForgotPasswordRenderer";
import PasswordResetFormRenderer from "./PasswordResetFormRenderer";
import ApiHelper from "../../../helpers/api-helper";

export default class PasswordResetComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			resetSubmitted: false,
			passwordResetError: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);

		this.validationSchema = Yup.object().shape({
			email: Yup.string().email("Bitte gib eine valide E-Mail-Adresse ein.").required("Bitte gib deine E-Mail-Adresse ein.")
		});
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = (_) => this.setState({resetSubmitted: true});
		const onError = (_) => {
			resetForm();
			this.setState({
				passwordResetError: true,
				passwordResetErrorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es bitte später nochmal."
			})
		}
		ApiHelper().forgotPassword(values.email, onSuccess, onError);
	}

	handleFocus() {
		this.setState({passwordResetError: false, passwordResetErrorMessage: null});
	}

	render() {
		return (
			<>
				{this.state.resetSubmitted && <PasswordResetFeedbackRenderer/>}
				{!this.state.resetSubmitted && <PasswordResetFormRenderer
					onFocus={this.handleFocus}
					onSubmit={this.handleSubmit}
					validationSchema={this.validationSchema}
					errorMessage={this.state.passwordResetErrorMessage}
					resetError={this.state.passwordResetError}
				/>}
				<ForgotPasswordRenderer onClick={this.props.onClick} text={"Zurück zum Login"}/>
			</>
		);
	}
}
