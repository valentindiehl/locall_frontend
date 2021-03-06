import React from "react";
import Container from "react-bootstrap/Container";
import RegisterContentComponent from "./RegisterContentComponent";
import RegisterSuccessRenderer from "./RegisterSuccessRenderer";
import * as PropTypes from 'prop-types';

const RegisterContainerRenderer = (props) => {
	return (
		<div id={"register"}>
			<Container className="registerContainer">
				{props.registered && <RegisterSuccessRenderer/>}
				{!props.registered && <RegisterContentComponent
					onRegistrationComplete={props.onRegistrationComplete}
					gastro={props.gastro}
				/>}
			</Container>
		</div>
	)
}

RegisterContainerRenderer.propTypes = {
	registered: PropTypes.bool.isRequired,
	onRegistrationComplete: PropTypes.func.isRequired
}

export default RegisterContainerRenderer;
