import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import LeftContainer from "./LeftContainer";
import ChatContainer from "./chat/ChatContainer";
import React from "react";

const LiveStreamPageRenderer = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col xs={12} onClick={props.onClick} className={"backToMap"}>
					<img src={"/assets/icons/back-arrow-dark.svg"} alt={"Left Arrow"}/>
					<span>Zurück zur Karte</span>
				</Col>
			</Row>
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

export default LiveStreamPageRenderer
