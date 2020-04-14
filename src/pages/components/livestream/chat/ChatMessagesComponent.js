import React, {Component} from "react";
import {socket} from "../../../../App";
import ChatMessagesRenderer from "./ChatMessagesRenderer";

export default class ChatMessagesComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatMessages: []
		}
	}

	addChatMessage(user, text, className) {
		const messages = Object.assign([], this.state.chatMessages);
		messages.push({user: user, text: text, className: className});
		this.setState({chatMessages: messages});
	}

	componentDidMount() {
		socket.on("joinedLiveStream", (data) => {
			this.augmentYou(data, socket.id);
			this.addChatMessage(data.user, "ist beigetreten!", "joined");
		});

		socket.on("chatMessage", (data) => {
			this.augmentYou(data, socket.id);
			this.addChatMessage(data.user, data.message, data.className);
		})
	}

	componentWillUnmount() {
		socket.off("joinedLiveStream");
		socket.off("chatMessage");
	}

	augmentYou(data, socketId) {
		if (data.user.socketId === socketId) {
			data.user.name = data.user.name + " (Du)"
		}
	}

	render() {
		return <ChatMessagesRenderer chatMessages={this.state.chatMessages}/>
	}
}
