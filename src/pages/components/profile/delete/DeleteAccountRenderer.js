import React from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

const DeleteAccountRenderer = (props) => {
	return (
		<div className="passwordResetSubmittedText">
			<p>Hier kannst du deinen Account löschen.
			</p>
			<p>
				<strong>
					Vorsicht: Die Löschung kannst du nicht mehr rückgängig
					machen!</strong>
			</p>
			<Button className="deleteProfile large-button"
					variant="link"
					onClick={props.onShowDeletionPopup}>
				KONTO LÖSCHEN
			</Button>
		</div>)
}

DeleteAccountRenderer.propTypes = {
	onShowDeletionPopup: PropTypes.func.isRequired
}

export default DeleteAccountRenderer;
