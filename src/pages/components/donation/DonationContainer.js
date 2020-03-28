import React, {Component} from "react";
import {Container} from "react-bootstrap";
import CloseComponent from "../rightside/CloseComponent";
import RightSideActionComponent from "../rightside/RightSideActionComponent";

export default class DonationContainer extends Component {
	render() {
		return (
			<Container>
				<RightSideActionComponent renderBack={true}/>
				<h1>Donation</h1>
			</Container>
		)
	}
}
