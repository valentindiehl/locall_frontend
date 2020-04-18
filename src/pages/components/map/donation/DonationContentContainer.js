import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DonationSelectionContainer from "./DonationSelectionContainer";
import Button from "react-bootstrap/Button";
import { PayPalButton } from "react-paypal-button-v2";
import LoadingComponent from "../../LoadingComponent";
import ApiHelper from "../../../../helpers/api-helper";
import axios from "axios";




export default class DonationContentContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			selectedDonation: '0.00',
			selectedPayment: 'none',
			errorMessage: '',
			isPending: false,
			transactionId: '',
		};

		this.changeDonation = this.changeDonation.bind(this);
		this.changePayment = this.changePayment.bind(this);
		this.handlePaypalClick = this.handlePaypalClick.bind(this);
		//this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		this.forceUpdate();
	}

	//OLD SUBMIT VALIDATION FOR PAYMENT / USE MAYBE LATER AGAIN
	/* handleFormSubmit = formSubmitEvent => {
		 formSubmitEvent.preventDefault();

		 //validate form
		 if (this.state.selectedDonation === 'none' && this.state.selectedPayment === 'none') {
			 this.setState({
				 errorMessage: 'Bitte wähle einen Betrag und eine Zahlungsmethode aus!'
			 });
		 } else if (this.state.selectedDonation === 'none') {
			 this.setState({
				 errorMessage: 'Bitte wähle einen Betrag aus!'
			 });
		 } else if (this.state.selectedPayment === 'none') {
			 this.setState({
				 errorMessage: 'Bitte wähle eine Zahlungsmethode aus!'
			 });
		 } else {
			 alert("Du spendest " + this.state.selectedDonation + " über " + this.state.selectedPayment);
			 let newPath = window.location.pathname.replace("donate", "thanks")
			 this.props.history.push(newPath);
		 }
	 };*/

	componentDidMount() {
		console.log(this.props.id);
	}


	handlePaypalClick() {
		//CHANGE HERE !!!!!
		if (this.state.selectedDonation === 'none') {
			this.setState({
				errorMessage: 'Bitte wähle einen Betrag aus!'
			});
		} else if (this.props.paypal !== 'undefined') {
			let url = "https://www.paypal.me/";
			this.setState({
				errorMessage: '',
			});
			window.open(url + this.props.paypal + "/" + this.state.selectedDonation);
		} else {
			this.setState({
				errorMessage: 'Für diese Gastronomie haben wir leider keinen Paypal Link 😔!'
			});
		}
	}

	changePayment(newPayment) {
		this.setState({
			selectedPayment: newPayment
		});
	}

	changeDonation(newDonation) {
		this.setState({
			selectedDonation: newDonation
		});
	}

	render() {
		return (
			<div>
					<Container className="donationContainer">
						<Form onSubmit={this.handleFormSubmit}>
							<h5>{this.props.titleMessage}</h5>
							<DonationSelectionContainer onChange={this.changeDonation}/>

							{/*OLD PAYMENT SELECTION
                            <h5>Wie möchtest du bezahlen?</h5>
                            <DonationPaymentSelectionContainer onChange={this.changePayment}/>
                            <DonationSubmitButtonContainer/>*/}

							{ /*
						<div className={"paypal-direct-wrapper"}>
							<Button onClick={this.handlePaypalClick} className='paypal-direct'>
								Direkt zu <img style={{display: "inline"}} src={'/assets/icons/de-pp-logo-100px.png'}/></Button>
						</div> */}

							{this.state.selectedDonation !== "0.00" ?
								<PayPalButton
									createOrder={(data, actions) => {
										this.setState({
											isPending: true,
										});

										console.log(this.props.id);
										return axios.post(process.env.REACT_APP_API_URL + "/v1/donations", {
											donation: {
												businessId: this.props.id,
												amount: this.state.selectedDonation
											}
										}, {
											withCredentials: true
										})
											.then((data) => {
												console.log(data);
												this.setState({
													transactionId: data.data.transactionId,
												});
												return actions.order.create({
													purchase_units: [{
														amount: {
															currency_code: "EUR",
															value: this.state.selectedDonation,
															reference_id: data.data.transactionId,
														},
														description: "Deine Spende an BLUB"
													}],
													application_context: {
														brand_name: "LOCALL",
														locale: "de-DE",
														shipping_preference: "NO_SHIPPING",
													}
												});
											})
									}}
									onSuccess={(details, data) => {
										this.setState({
											isPending: false,
										});
										console.log("Details: ", details);
										console.log("Data: ", data);
										// OPTIONAL: Call your server to save the transaction
										return axios.put(process.env.REACT_APP_API_URL + '/v1/donations/' + this.state.transactionId, {
											donation: {
												paypalId: details.id,
												status: "COMPLETE",
												timestamp: details.create_time,
												amount: details.purchase_units[0].amount.value,
											}}, {
											withCredentials: true
										});
									}}
									onCancel={(data) => {
										console.debug("User cancelled the transaction.");
										this.setState({
											isPending: false,
										})
									}}

									options={{
										clientId: "ATMVYVJ_QhIHKE_oASm4kAomdgWrvyhnJRGKV3Q-cadlrAFwyDniry6H_pMICguO-xIkcs0IcWTUBGp_",
										currency: "EUR"
									}}
									style={{}}
								/>
								: <div></div>}

							<p className='error-message'>{this.state.errorMessage}</p>
						</Form>
						{this.state.isPending ?
							<LoadingComponent/>
							:
							<></>
						}
					</Container>
			</div>
		);
	}
}
