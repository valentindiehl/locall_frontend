import React, {Component} from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ChatContainer from "./components/livestream/chat/ChatContainer";

import "./css/livestream/general.css"
import LeftContainer from "./components/livestream/LeftContainer";

export default class LiveStreamPage extends Component {

	render() {
		return (
			<Container fluid>
				<Row>
					<Col lg={8}>
						<LeftContainer/>
					</Col>
					<Col lg={4}>
						<ChatContainer/>
					</Col>
				</Row>
			</Container>
		)
	}
}
