import React from "react";
import ToggleContainer from "./ToggleContainer";
import RegisterUserFormComponent from "./RegisterUserFormComponent";
import RegisterGastroFormComponent from "./RegisterGastroFormComponent";
import * as PropTypes from 'prop-types';

const RegisterContentRenderer = (props) => {
	return (
		<>
			<h4>Du möchtest mitmachen?</h4>
			<ToggleContainer isUser={props.isUser} onToggle={props.onToggle}/>
			{props.isUser && <RegisterUserFormComponent onRegistrationComplete={props.onRegistrationComplete}/>}
			{!props.isUser && <RegisterGastroFormComponent onRegistrationComplete={props.onRegistrationComplete}/>}
		</>
	)
}

RegisterContentRenderer.propTypes = {
	onToggle: PropTypes.func.isRequired,
	isUser: PropTypes.bool.isRequired,
	onRegistrationComplete: PropTypes.func.isRequired
}

export default RegisterContentRenderer;
