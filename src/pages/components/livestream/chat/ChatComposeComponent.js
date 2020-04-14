import React, {Component} from "react";
import {socket} from "../../../../App";
import ChatComposeRenderer from "./ChatComposeRenderer";
import {connect} from "react-redux";


function mapStateToProps(state) {
	return {isLoggedIn: state.user.isLoggedIn}
}

class ChatComposeComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
		this.handleSendMessage = this.handleSendMessage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleSendMessage(event) {
		event.preventDefault();
		console.log("Emitting message");
		socket.emit("chatMessage", {text: this.state.value});
		this.setState({value: ""});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleKeyDown(event) {
		if (event.keyCode === 13 && event.shiftKey === false) {
			this.handleSendMessage(event);
		}
	}

	render() {
		return <ChatComposeRenderer
			onSendMessage={this.handleSendMessage}
			value={this.state.value}
			onChange={this.handleChange}
			onKeyDown={this.handleKeyDown}
			enabled={this.props.isLoggedIn}
		/>
	}
}

export default connect(mapStateToProps)(ChatComposeComponent)
