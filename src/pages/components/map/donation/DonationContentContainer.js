import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DonationSelectionContainer from "./DonationSelectionContainer";
import Button from "react-bootstrap/Button";

export default class DonationContentContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			selectedDonation: 'none',
			selectedPayment: 'none',
			errorMessage: ''
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

						{/*V1 DIRECT TO PAYPAL*/}
						<div className={"paypal-direct-wrapper"}>
							<Button onClick={this.handlePaypalClick} className='paypal-direct'>
								Direkt zu <img style={{display: "inline"}} src={'/assets/icons/de-pp-logo-100px.png'}/></Button>
						</div>

						<p className='error-message'>{this.state.errorMessage}</p>
					</Form>
				</Container>
			</div>
		);
	}
}
