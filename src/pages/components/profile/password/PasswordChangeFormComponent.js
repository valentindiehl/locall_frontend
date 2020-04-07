import React, {Component} from "react";
import * as Yup from "yup";
import PasswordChangeFormRenderer from "./PasswordChangeFormRenderer";
import * as PropTypes from "prop-types";
import ApiHelper from "../../../../helpers/api-helper";

export default class PasswordChangeFormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			passwordChangeError: false
		}

		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.validationSchema = Yup.object().shape({
			oldPassword: Yup.string().required("Bitte gib dein altes Passwort ein."),
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
		const onSuccess = (_) => this.props.onChangePasswordComplete();
		const onError = (_) => {
			resetForm();
			this.setState({
				passwordChangeError: true,
				errorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es doch bitte später noch einmal."
			})
		}
		ApiHelper().changeUserPassword(values, onSuccess, onError);
	}

	handleFocus() {
		this.setState({passwordChangeError: false, errorMessage: null});
	}

	render() {
		return <PasswordChangeFormRenderer
			validationSchema={this.validationSchema}
			onFocus={this.handleFocus}
			passwordChangeError={this.state.passwordChangeError}
			onSubmit={this.handleSubmit}
			errorMessage={this.state.errorMessage}
		/>
	}
}

PasswordChangeFormComponent.propTypes = {
	onChangePasswordComplete: PropTypes.func.isRequired
}
