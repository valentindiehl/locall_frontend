import React, {Component} from "react";
import * as PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";


const ChatSubmitButton = (props) => {
	return (
		<div className={"chatBlockButtonWrapper"}>
			{props.enabled && <input
				type="submit"
				value={"Senden"}
				className={"chatButton chatBlockButton"}
				disabled={!props.enabled}
			/>}
			{!props.enabled && <Button
				href="/login"
				target="_blank"
				className={"chatButton chatBlockButton"}
			>Login</Button>}
		</div>
	)
}

ChatSubmitButton.propTypes = {
	enabled: PropTypes.bool.isRequired,
}

export default class ChatComposeRenderer extends Component {

	render() {
		return (
			<Container fluid className={"chatComposeContainer"}>
				<form onSubmit={this.props.onSendMessage}>
					<textarea
						value={this.props.value}
						onChange={this.props.onChange}
						placeholder={this.props.enabled ? "Nachricht schreiben ..." : "Logge dich ein, um am Chat teilzunehmen."}
						className={"chatComposeTextArea"}
						onKeyDown={this.props.onKeyDown}
						disabled={!this.props.enabled}
					/>
					<ChatSubmitButton enabled={this.props.enabled}/>
				</form>
			</Container>
		)
	}
}

ChatComposeRenderer.propTypes = {
	onSendMessage: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onKeyDown: PropTypes.func.isRequired,
	enabled: PropTypes.bool.isRequired
}
