import React, {Component} from "react";
import * as Yup from "yup";
import ApiHelper from "../../../../helpers/api-helper";
import PasswordChangeSuccessRenderer from "./PasswordChangeSuccessRenderer";
import PasswordForgotFormRenderer from "./PasswordForgotFormRenderer";
import * as PropTypes from "prop-types";

export default class PasswordForgotFormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			passwordChangeError: false,
			updateSuccessful: false
		}

		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.validationSchema = Yup.object().shape({
			password: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.')
				.required("Bitte gib dein neues Passwort ein."),
			passwordConfirm: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.').required("Bitte bestätige dein neues Passwort.").when("password", {
				is: val => (!!(val && val.length > 0)),
				then: Yup.string().oneOf(
					[Yup.ref("password")],
					"Die Passwörter müssen übereinstimmen."
				)
			})
		});
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = (_) => this.setState({updateSuccessful: true});
		const onError = (_) => {
			resetForm();
			this.setState({
				passwordChangeError: true,
				errorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es doch bitte später noch einmal."
			})
		}
		ApiHelper().changeUserPasswordWithToken(values, this.props.token, onSuccess, onError);
	}

	handleFocus() {
		this.setState({passwordChangeError: false, errorMessage: null});
	}

	render() {
		return (
			<>
				{this.state.updateSuccessful && <PasswordChangeSuccessRenderer onHideSuccessMessage={null}/>}
				{!this.state.updateSuccessful && <PasswordForgotFormRenderer
					validationSchema={this.validationSchema}
					onFocus={this.handleFocus}
					passwordChangeError={this.state.passwordChangeError}
					onSubmit={this.handleSubmit}
					errorMessage={this.state.errorMessage}
				/>}
			</>)
	}
}

PasswordForgotFormComponent.propTypes = {
	token: PropTypes.string.isRequired
}

