import React, {Component} from "react";
import {Container} from "react-bootstrap";
import CompanyActionContainer from "../details/CompanyActionContainer";

export default class DonationContainer extends Component {
	render() {
		return (
			<Container>
				<CompanyActionContainer/>
				<h1>Donation</h1>
			</Container>
		)
	}
}
