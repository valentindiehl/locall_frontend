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
        this.state = {selectedDonation: 'none'};
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
            <FormGroup as={Row} className='donationButtonsRow'>
                <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange}
                                   checked={this.state.selectedDonation === "1.50"} value='1.50'/>
                            <DonationButton selected={this.state.selectedDonation === '1.50'} icon='coffee'
                                            price='1,50€' article='1 KLEINER KAFFEE'/>
                        </label>
                    </FormCheck>
                </Col>
                <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange}
                                   checked={this.state.selectedDonation === '3.00'} value='3.00'/>
                            <DonationButton selected={this.state.selectedDonation === '3.00'} icon='coffee'
                                            price='3,00€' article='1 MITTLERER KAFFEE'/>
                        </label>
                    </FormCheck>
                </Col>
                <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange}
                                   checked={this.state.selectedDonation === '6.00'} value='6.00'/>
                            <DonationButton selected={this.state.selectedDonation === '6.00'} icon='coffee'
                                            price='6,00€' article='1 GROSSER KAFFEE'/>
                        </label>
                    </FormCheck>
                </Col>
                <Col>
                    <FormCheck inline>
                        <label>
                            <input type="radio" name="radio" onChange={this.handleOptionChange}
                                   checked={this.state.selectedDonation === '0.00'} value='0.00'/>
                            <DonationButton selected={this.state.selectedDonation === '0.00'} icon='money' price=''
                                            article='INDIVIDUELLER GELDBETRAG'/>
                        </label>
                    </FormCheck>
                </Col>
            </FormGroup>
        );
    }
}