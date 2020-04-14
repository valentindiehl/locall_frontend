import React, {Component} from "react";
import * as Yup from "yup";
import ApiHelper from "../../../helpers/api-helper";
import RegisterGastroFormRenderer from "./RegisterGastroFormRenderer";
import * as PropTypes from 'prop-types';

export default class RegisterGastroFormComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			registerError: false
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.validationSchema = Yup.object().shape({
			name: Yup.string().required("Bitte gib den Names deines Lokals ein."),
			email: Yup.string().email("Bitte gib eine valide E-Mail-Adresse ein.").required("Bitte gib deine E-Mail-Adresse ein."),
			terms: Yup.boolean().oneOf([true], 'Bitte akzeptiere die Datenschutzerklärung.')
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
		ApiHelper().registerBusiness(values, onSuccess, onError);
	}

	handleFocus() {
		this.setState({registerError: false, errorMessage: null});
	}


	render() {
		return <RegisterGastroFormRenderer
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
