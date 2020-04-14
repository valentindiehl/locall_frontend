import React from 'react';
import GastroProfile from "./GastroProfile";
import * as PropTypes from "prop-types";

const GastroProfileContainer = (props) => {
	return (
		<div className={"contentContainer"}>
			<h3>Gastro-Einstellungen</h3>
			<GastroProfile paypal={props.paypal} description={props.description}/>
		</div>
	);
}

GastroProfileContainer.propTypes = {
	paypal: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default GastroProfileContainer;
