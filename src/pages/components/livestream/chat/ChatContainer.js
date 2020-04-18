import React, {Component} from "react";
import ChatMessagesComponent from "./ChatMessagesComponent";
import ChatComposeComponent from "./ChatComposeComponent";

import "../../../css/livestream/chat.css";

export default class ChatContainer extends Component {

	render() {
		return (
			<div className={"white-box"}>
				<h4>Live Chat</h4>
				<ChatMessagesComponent/>
				<ChatComposeComponent/>
			</div>
		)
	}
}
