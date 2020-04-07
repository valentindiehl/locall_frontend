import React from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

const PasswordChangeSuccessRenderer = (props) => {
	return (
		<div className="passwordResetSubmittedText">
			<h4>
				SUPER,
			</h4>
			<p>
				Dein Passwort ist aktualisiert. Ab jetzt kannst du dich mit deinem neuen Passwort
				einloggen.
			</p>

			{!!props.onHideSuccessMessage && <Button className="loginFormButton"
													 variant="link"
													 onClick={props.onHideSuccessMessage}>
				Okay
			</Button>}
		</div>
	)
}

PasswordChangeSuccessRenderer.propTypes = {
	onHideSuccessMessage: PropTypes.func
}

export default PasswordChangeSuccessRenderer;
