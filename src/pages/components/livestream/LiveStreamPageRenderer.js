import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import LeftContainer from "./LeftContainer";
import ChatContainer from "./chat/ChatContainer";
import React from "react";

const LiveStreamPageRenderer = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col lg={8}>
					<LeftContainer {...props}/>
				</Col>
				<Col lg={4}>
					<ChatContainer/>
				</Col>
			</Row>
		</Container>
	)
}

export default LiveStreamPageRenderer
