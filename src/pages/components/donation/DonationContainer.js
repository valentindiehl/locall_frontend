import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import DonationSelectionContainer from "./DonationSelectionContainer";
import DonationPaymentSelectionContainer from "./DonationPaymentSelectionContainer";
import DonationSubmitButtonContainer from "./DonationSubmitButtonContainer";
import CloseComponent from "../rightside/CloseComponent";
import RightSideActionComponent from "../rightside/RightSideActionComponent";


import '../../css/rightside/rightSideContainer.css';
import '../../css/donation/donationContainer.css';
import Button from "react-bootstrap/Button";


export default class DonationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            selectedDonation: 'none',
            selectedPayment: 'none',
            errorMessage: ''
        }

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
        let companyLink = "tabeablnk"; //this.state.data.name; //only for testing -> there should be the companyLink
        
        if (this.state.selectedDonation === 'none') {
            this.setState({
                errorMessage: 'Bitte wähle einen Betrag aus!'
            });
        } else if (companyLink !== 'undefined') {
            let url = "https://www.paypal.me/";
            window.open(url + companyLink + "/" + this.state.selectedDonation);
        } else {
            this.setState({
                errorMessage: 'Für diese Gastronomie haben wir leider kein Paypal Link :(!'
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

    //functions to get the information of the selected company
    componentDidMount() {
        console.log(this.props.match);
        const {id} = this.props.match.params;
        this.updateBusiness(id);
    }

    updateBusiness(id) {
        fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => this.setState({data: res}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let newId = this.props.match.params.id;
        let oldId = prevProps.match.params.id;
        console.log(this.props.match);
        console.log("Did update", newId, oldId);
        if (newId === oldId) return;
        this.updateBusiness(newId);
    }


    render() {
        return (
            <div>
                {!!this.state.data ? (
                    <Container className="donationContainer">
                        <RightSideActionComponent renderBack={true}/>
                        <Form onSubmit={this.handleFormSubmit}>
                            <h5>Was möchtest du an {this.state.data.name} spenden?</h5>
                            <DonationSelectionContainer onChange={this.changeDonation}/>

                            {/*OLD PAYMENT SELECTION
                            <h5>Wie möchtest du bezahlen?</h5>
                            <DonationPaymentSelectionContainer onChange={this.changePayment}/>
                            <DonationSubmitButtonContainer/>*/}

                            {/*V1 DIRECT TO PAYPAL*/}
                            <div className='paypal-direct'><img src='/assets/icons/paypal-direct.png'
                                                                onClick={this.handlePaypalClick}/></div>

                            <p className='error-message'>{this.state.errorMessage}</p>
                        </Form>
                    </Container>
                ) : (<Container>Loading</Container>)}
            </div>
        );
    }
}


