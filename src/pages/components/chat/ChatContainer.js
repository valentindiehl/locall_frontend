import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import CloseComponent from "../rightside/CloseComponent";
import RightSideActionComponent from "../rightside/RightSideActionComponent";

export default class ChatContainer extends Component {

	render() {
		return (
			<Container>
				<RightSideActionComponent renderBack={true}/>
				<h1>Chat</h1>
			</Container>
		)
	}
}
