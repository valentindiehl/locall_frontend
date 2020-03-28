import React, {Component} from "react";
import {Container} from "react-bootstrap";
import CloseComponent from "../rightside/CloseComponent";

export default class DonationContainer extends Component {
	render() {
		return (
			<Container>
				<CloseComponent/>
				<h1>Donation</h1>
			</Container>
		)
	}
}
