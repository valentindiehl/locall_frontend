import React from "react";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

const DeleteAccountButton = (props) => {
	return (<Button className="deleteProfile large-button"
					variant="link"
					onClick={props.onShowDeletionPopup}>
		KONTO LÖSCHEN
	</Button>)
}

DeleteAccountButton.propTypes = {
	onShowDeletionPopup: PropTypes.func.isRequired
}

export default DeleteAccountButton;
