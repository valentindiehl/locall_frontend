import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import '../../../css/settings/actionContainer.css';
import * as PropTypes from "prop-types";

const ActionContainerRenderer = (props) => {
	return (
		<Col sm={3}>
			<Container onClick={props.onClick} className={props.className + " actionContainerSettings"}>
				{!props.imageRight && <img src={props.iconSrc} alt={props.alt}/>}
				<span>{props.text}</span>
				{!!props.imageRight && <img src={props.iconSrc} alt={props.alt}/>}
			</Container>
		</Col>
	)
}

ActionContainerRenderer.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
	imageRight: PropTypes.bool,
	iconSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

export default ActionContainerRenderer;
