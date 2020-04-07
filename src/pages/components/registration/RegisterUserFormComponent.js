import React, {Component} from "react";
import * as Yup from "yup";
import ApiHelper from "../../../helpers/api-helper";
import RegisterUserFormRenderer from "./RegisterUserFormRenderer";
import * as PropTypes from "prop-types";
import RegisterGastroFormComponent from "./RegisterGastroFormComponent";

export default class RegisterUserFormComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			registerError: false
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.validationSchema = Yup.object().shape({
			name: Yup.string().required("Bitte gib deinen Namen ein."),
			email: Yup.string().email("Bitte gib eine valide E-Mail-Adresse ein.").required("Bitte gib deine E-Mail-Adresse ein."),
			password: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.')
				.required("Bitte gib dein Passwort ein."),
			passwordConfirm: Yup.string().min(8, 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.').required("Bitte bestätige dein Passwort.").when("password", {
				is: val => (!!(val && val.length > 0)),
				then: Yup.string().oneOf(
					[Yup.ref("password")],
					"Die Passwörter müssen übereinstimmen."
				)
			}),
			terms: Yup.boolean().oneOf([true], 'Bitte akzeptiere die Datenschutzerklärung.'),
		});
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = (_) => this.props.onRegistrationComplete();
		const onError = (_) => {
			resetForm();
			this.setState({
				registerError: true,
				errorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es doch bitte später noch einmal."
			})
		}
		ApiHelper().registerUser(values, onSuccess, onError);
	}

	handleFocus() {
		this.setState({registerError: false, errorMessage: null});
	}

	render() {
		return <RegisterUserFormRenderer
			validationSchema={this.validationSchema}
			onFocus={this.handleFocus}
			registerError={this.state.registerError}
			onSubmit={this.handleSubmit}
			errorMessage={this.state.errorMessage}
		/>
	}
}

RegisterGastroFormComponent.propTypes = {
	onRegistrationComplete: PropTypes.func.isRequired
}
