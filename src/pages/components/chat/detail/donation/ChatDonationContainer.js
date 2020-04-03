import React, {Component} from 'react';
import DonationContentContainer from "../../../donation/DonationContentContainer";
import {Container} from "react-bootstrap";

export default class ChatDonationContainer extends Component {
	render() {
		return (
			<Container className="chatDonateContainer">
				<ChatDonationDescriptionContainer company={this.props.company}/>
				<DonationContentContainer paypal={this.props.company.paypal}/>
			</Container>
		)
	}
}

const ChatDonationDescriptionContainer = (props) => {
	return <h6>{props.company.name}</h6>;
}
