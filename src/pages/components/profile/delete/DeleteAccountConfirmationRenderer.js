import React from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

const DeleteAccountConfirmationRenderer = (props) => {
	return (
		<div className="passwordResetSubmittedText">
			<h4>
				SICHER?
			</h4>
			<p>
				Deine Account Löschung kannst du nicht rückgängig machen.
			</p>
			<Button className="loginFormButton deleteButton"
					variant="link"
					onClick={props.onDeleteAccount}>
				JA
			</Button>
			<Button className="loginFormButton button-grey"
					variant="link"
					onClick={props.onHideDeletionPopup}>
				ABBRECHEN
			</Button>
		</div>
	)
}

DeleteAccountConfirmationRenderer.propTypes = {
	onDeleteAccount: PropTypes.func.isRequired,
	onHideDeletionPopup: PropTypes.func.isRequired
}

export default DeleteAccountConfirmationRenderer;
