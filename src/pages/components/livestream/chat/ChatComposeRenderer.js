import React, {Component} from "react";
import * as PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

export default class ChatComposeRenderer extends Component {

	render() {
		return (
			<Container fluid className={"chatComposeContainer"}>
				<form onSubmit={this.props.onSendMessage}>
					<textarea
						value={this.props.value}
						onChange={this.props.onChange}
						placeholder={"Nachricht schreiben"}
						className={"chatComposeTextArea"}
						onKeyDown={this.props.onKeyDown}
					/>
					<div className={"chatBlockButtonWrapper"}>
						<input
							type="submit"
							value={"Senden"}
							className={"chatButton chatBlockButton"}
							disabled={!this.props.value}
						/>
					</div>
				</form>
			</Container>
		)
	}
}

ChatComposeRenderer.propTypes = {
	onSendMessage: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onKeyDown: PropTypes.func.isRequired
}
