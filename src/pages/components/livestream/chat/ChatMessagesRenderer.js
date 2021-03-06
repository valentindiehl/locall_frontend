import React, {Component} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";

const ChatMessage = (props) => {
	let className = "chatMessageText";
	if (!!props.message.className) className += " " + props.message.className;
	return (
		<Row className="align-items-center">
			<Col className={"chatMessageImageCol"} xs={2}>
				<Image src={props.message.user.avatarUrl} alt={"Avatar"} className={"chatMessageAvatar"}/>
			</Col>
			<Col className={"chatMessageTextCol"} xs={10}>
				<span className={"chatMessageUserName"}>
					{props.message.user.name}
				</span>&nbsp;
				<span className={className}>
					{props.message.text}
				</span>
			</Col>
		</Row>
	)
}

ChatMessage.propTypes = {
	message: PropTypes.shape({
		user: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatarUrl: PropTypes.string.isRequired
		}),
		text: PropTypes.string.isRequired,
		className: PropTypes.string
	})
}

export default class ChatMessagesRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderChatMessages = this.renderChatMessages.bind(this);
		this.shouldScroll = true;
	}

	renderChatMessages() {
		if (!this.messagesContainer) return;
		this.shouldScroll = Math.abs(this.messagesContainer.scrollHeight -
			(this.messagesContainer.scrollTop + this.messagesContainer.clientHeight)) <= 100;
		return this.props.chatMessages.map((msg, index) => {
			return <ChatMessage key={index} message={msg}/>
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (!this.shouldScroll) return;
		this.messagesContainer.scrollTo({top: this.messagesContainer.scrollHeight, behavior: "smooth"});
	}

	render() {
		return (
			<Container ref={(el) => {
				this.messagesContainer = el;
			}} fluid className={"chatMessagesContainer"}>
				{this.renderChatMessages()}
				<div className={"messagesBottom"}/>
			</Container>
		)
	}
}

ChatMessagesRenderer.propTypes = {
	chatMessages: PropTypes.array.isRequired
}
