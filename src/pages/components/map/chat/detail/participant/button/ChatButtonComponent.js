import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MuteComponent from "./mute/MuteComponent";
import LeaveComponent from "./leave/LeaveComponent";
import PropTypes from 'prop-types';

/**
 * Stateless component wrapping chat buttons.
 */
const ChatButtonComponent = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col style={{padding: 2}} md={5}>
					{!!props.localStream && <MuteComponent
						localStream={props.localStream}
						onMute={props.onMute}/>}
				</Col>
				<Col style={{padding: 2}} md={7}>
					<LeaveComponent onLeave={props.onLeave}/>
				</Col>
			</Row>
		</Container>
	)
}

ChatButtonComponent.propTypes = {
	/** The client's local MediaStream object. */
	localStream: PropTypes.object,
	/** Handling mute event of a client with the given `socketId` and `muted` flag. */
	onMute: PropTypes.func.isRequired,
	/** Handling leave logic. */
	onLeave: PropTypes.func.isRequired
}

export default ChatButtonComponent
