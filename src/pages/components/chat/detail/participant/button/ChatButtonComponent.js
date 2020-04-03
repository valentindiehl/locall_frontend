import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MuteComponent from "./mute/MuteComponent";
import LeaveComponent from "./leave/LeaveComponent";

export default class ChatButtonComponent extends Component {

	render() {
		return (
			<Container fluid>
				<Row>
					<Col style={{padding: 2}} md={5}>
						{!!this.props.localStream && <MuteComponent
							localStream={this.props.localStream}
							onMute={this.props.onMute}/>}
					</Col>
					<Col style={{padding: 2}} md={7}>
						<LeaveComponent/>
					</Col>
				</Row>
			</Container>
		)
	}
}
