import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import CloseComponent from "../rightside/CloseComponent";

export default class ChatContainer extends Component {

	render() {
		return (
			<Container>
				<CloseComponent/>
				<h1>Chat</h1>
			</Container>
		)
	}
}
