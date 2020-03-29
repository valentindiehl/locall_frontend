import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormGroup from "react-bootstrap/FormGroup";
import DonationButton from "./DonationButton";
import FormCheck from "react-bootstrap/FormCheck";

import '../../css/donation/donationButtons.css';


export default class DonationSelectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedDonation : 'none'};
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedDonation: changeEvent.target.value
        });
        this.props.onChange(changeEvent.target.value);
    };

    render() {
        return (
                <FormGroup as={Row} className = 'donationButtonsRow'>
                    <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange} checked={this.state.selectedDonation === "small-coffee"} value = "small-coffee"/>
                            <DonationButton selected = {this.state.selectedDonation === 'small-coffee'} icon = 'coffee' price = '1,50€' article = '1 KLEINER KAFFEE' />
                        </label>
                    </FormCheck>
                    </Col>
                    <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange} checked={this.state.selectedDonation === 'medium-coffee'} value = "medium-coffee"/>
                            <DonationButton selected = {this.state.selectedDonation === 'medium-coffee'} icon = 'coffee'  price = '3,00€' article = '1 MITTLERER KAFFEE' />
                        </label>
                    </FormCheck>
                    </Col>
                    <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange} checked={this.state.selectedDonation === 'large-coffee'} value = "large-coffee"/>
                            <DonationButton selected = {this.state.selectedDonation === 'large-coffee'} icon = 'coffee'  price = '6,00€'  article = '1 GROSSER KAFFEE' />
                        </label>
                    </FormCheck>
                    </Col>
                    <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange} checked={this.state.selectedDonation === 'individual-coffee'} value = "individual-coffee"/>
                            <DonationButton selected = {this.state.selectedDonation === 'individual-coffee'} icon = 'money'  price = '' article = 'INDIVIDUELLER GELDBETRAG' />
                        </label>
                    </FormCheck>
                    </Col>
                </FormGroup>
        );
    }
}