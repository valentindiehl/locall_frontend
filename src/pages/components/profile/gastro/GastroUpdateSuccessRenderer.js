import React from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

const GastroUpdateSuccessRenderer = (props) => {
	return (
		<div className="passwordResetSubmittedText">
			<h4>
				SUPER,
			</h4>
			<p>
				Deine Gastrodaten sind aktualisiert und können jetzt von allen Nutzern auf deinem Gastro-Profil
				gesehen werden.
			</p>
			<Button className="loginFormButton"
					variant="link"
					onClick={props.onClick}>
				Okay
			</Button>
		</div>
	);
}

GastroUpdateSuccessRenderer.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default GastroUpdateSuccessRenderer;
