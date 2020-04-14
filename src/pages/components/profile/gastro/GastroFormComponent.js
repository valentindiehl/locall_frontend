import React, {Component} from "react";
import * as Yup from "yup";
import ApiHelper from "../../../../helpers/api-helper";
import GastroUpdateSuccessRenderer from "./GastroUpdateSuccessRenderer";
import GastroFormRenderer from "./GastroFormRenderer";
import * as PropTypes from "prop-types";

export default class GastroFormComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			updateSuccessful: false,
			updateError: false
		}
		this.hideSuccessMessage = this.hideSuccessMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);

		this.validationSchema = Yup.object().shape({
			description: Yup.string().min(20, "Deine Beschreibung muss mindestens 20 Zeichen lang sein.")
				.max(150, "Deine Beschreibung darf nicht länger als 150 Zeichen sein.").required("Bitte gib einen Beschreibungstext ein."),
			paypalname: Yup.string().required("Bitte gib deinen PayPal.me Nutzernamen ein.")
		});
	}

	hideSuccessMessage() {
		window.location.reload();
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = (_) => this.setState({updateSuccessful: true});
		const onError = (_) => {
			resetForm();
			this.setState({
				updateError: true,
				errorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es doch bitte später noch einmal."
			})
		}
		ApiHelper().updateGastroAccount(values, onSuccess, onError)

	}

	handleFocus() {
		this.setState({updateError: false, errorMessage: null});
	}

	render() {
		return (<>
			{this.state.updateSuccessful && <GastroUpdateSuccessRenderer
				onClick={this.hideSuccessMessage}/>}

			{!this.state.updateSuccessful && <GastroFormRenderer
				validationSchema={this.validationSchema}
				onFocus={this.handleFocus}
				updateError={this.state.updateError}
				onSubmit={this.handleSubmit}
				errorMessage={this.state.errorMessage}
				description={this.props.description}
				paypal={this.props.paypal}
			/>}
		</>)
	}
}

GastroFormComponent.propTypes = {
	description: PropTypes.string.isRequired,
	paypal: PropTypes.string.isRequired
}
