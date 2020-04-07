import React from 'react';
import Container from "react-bootstrap/Container";
import GastroProfile from "./GastroProfile";
import Col from "react-bootstrap/Col";
import * as PropTypes from "prop-types";

const GastroProfileContainer = (props) => {
	return (
		<div className="Fade">
			<Col sm={6}>
				<Container className="settings">
					<h3>Gastro-Einstellungen</h3>
					<GastroProfile paypal={props.paypal} description={props.description}/>
				</Container>
			</Col>
		</div>
	);
}

GastroProfileContainer.propTypes = {
	paypal: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default GastroProfileContainer;
