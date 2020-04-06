import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as PropTypes from "prop-types";

import '../../css/landingpage/toggleContainer.css';


const ToggleContainer = (props) => {
	return (
		<Container className="toggleContainer">
			<Row>
				<Col className={props.isUser ? "userCol selected" : "userCol"} onClick={props.onToggle}>
					<img
						src={props.isUser ? "/assets/icons/icons-kunden-white.svg" : "/assets/icons/icons-kunden-gelb.svg"}
						alt={"User-Icon"}/>
					<p id="userText">LOKALE GASTRONOMEN UNTERSTÜTZEN</p>
				</Col>
				<Col className={!props.isUser ? "gastroCol selected" : "gastroCol"}
					 onClick={props.onToggle}>
					<img
						src={!props.isUser ? "/assets/icons/icons-laden-white.svg" : "/assets/icons/icons-laden-orange.svg"}
						alt={"Home-Icon"}/>
					<p id="gastroText">MEINEN LADEN REGISTRIEREN</p>
				</Col>
			</Row>
		</Container>
	);
}

ToggleContainer.propTypes = {
	isUser: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired
}

export default ToggleContainer;
