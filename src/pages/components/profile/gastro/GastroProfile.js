import React from 'react';
import GastroFormComponent from "./GastroFormComponent";
import * as PropTypes from "prop-types";


const GastroProfile = (props) => {
	return (
		<div className="settings-container">
			<div className="box-heading">
				<img className="iconProfile" src={"/assets/icons/edit.png"} alt={"Edit-Icon"}/>
				<h4>Lokalinformationen bearbeiten</h4>
			</div>
			<div className="white-box">
				<GastroFormComponent paypal={props.paypal} description={props.description}/>
			</div>
		</div>
	)
}

GastroProfile.propTypes = {
	paypal: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default GastroProfile;
