import React, {Component} from 'react';
import FormCheck from "react-bootstrap/FormCheck";
import FormGroup from "react-bootstrap/FormGroup";

import '../../css/donation/donationPayment.css';


export default class DonationPaymentSelectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedPayment : 'none'};
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedPayment: changeEvent.target.value
        });
        this.props.onChange(changeEvent.target.value);
    };

    render() {
        return (
            <FormGroup className = "paymentSelection">
                {/*<FormCheck>
                    <label><input
                        className="paymentRadio"
                        name="formHorizontalRadios"
                        type="radio"
                        value="debit"
                        onChange={this.handleOptionChange}/>
                    <span>Lastschrift</span></label>
                </FormCheck>*/}
                <FormCheck>
                    <label><input
                        className="paymentRadio"
                        name="formHorizontalRadios"
                        type="radio"
                        value="paypal"
                        onChange={this.handleOptionChange}/>
                        <span>Paypal</span>
                        <img src = '/assets/icons/paypal-100px.png' alt = 'paypal-logo'/>
                      </label>
                </FormCheck>
                <FormCheck>
                    <label><input
                        className="paymentRadio"
                        name="formHorizontalRadios"
                        type="radio"
                        value="klarna"
                        onChange={this.handleOptionChange}/>
                    <span>Klarna</span></label>
                </FormCheck>
             {/*   <FormCheck>
                    <label><input
                        className="paymentRadio"
                        name="formHorizontalRadios"
                        type="radio"
                        value="credit"
                        onChange={this.handleOptionChange}/>
                    <span>Kreditkarte</span></label>
                </FormCheck>*/}
            </FormGroup>
        );
    }
}