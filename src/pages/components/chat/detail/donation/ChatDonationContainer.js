import React from 'react';
import DonationContentContainer from "../../../donation/DonationContentContainer";
import {Container} from "react-bootstrap";
import PropTypes from 'prop-types';

/**
 * Stateless component wrapping a description and donation content.
 * @see ChatDonationDescriptionContainer
 * @see DonationContentContainer
 * @param props has to contain a company attribute object.
 * @returns {*}
 */
const ChatDonationContainer = (props) => {
	return (
		<Container className="chatDonateContainer">
			<ChatDonationDescriptionContainer company={props.company}/>
			<DonationContentContainer paypal={props.company.paypal}/>
		</Container>
	)
}

ChatDonationContainer.propTypes = {
	/** Identifying the currently selected company. */
	company: PropTypes.shape({
		/** The PayPal.me name of the company, i.e. just the last component of the URL path.
		 * For example, if the PayPal.me URL is https://paypal.me/myName, this prop should contain only 'myName'.*/
		paypal: PropTypes.string.isRequired
	}).isRequired
}

/**
 * Stateless component rendering a description heading of the respective company
 * @param props containing a `company` attribute object which at least has to have a `name`.
 * @returns {*}
 */
const ChatDonationDescriptionContainer = (props) => {
	return <h6>{props.company.name}</h6>;
}

ChatDonationDescriptionContainer.propTypes = {
	/** A company object identifying the currently selected company. */
	company: PropTypes.shape({
		/** The name of the company. */
		name: PropTypes.string.isRequired
	}).isRequired
}

export default ChatDonationContainer;
