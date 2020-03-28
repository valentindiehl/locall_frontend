import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import CompanyActionContainer from "../details/CompanyActionContainer";

export default class ChatContainer extends Component {

	render() {
		return (
			<Container>
				<CompanyActionContainer/>
				<h1>Chat</h1>
			</Container>
		)
	}
}
