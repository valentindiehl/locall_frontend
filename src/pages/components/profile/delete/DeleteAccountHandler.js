import React, {Component} from "react";
import DeleteAccountConfirmationRenderer from "./DeleteAccountConfirmationRenderer";
import {withRouter} from "react-router-dom";
import ApiHelper from "../../../../helpers/api-helper";
import * as PropTypes from "prop-types";

class DeleteAccountComponent extends Component {

	constructor(props) {
		super(props);
		this.handleDeleteAccount = this.handleDeleteAccount.bind(this);
	}

	handleDeleteAccount() {
		ApiHelper().deleteAccount(
			() => window.location.pathname = "/", console.log);
	}

	render() {
		return <DeleteAccountConfirmationRenderer
			onDeleteAccount={this.handleDeleteAccount}
			onHideDeletionPopup={this.props.onHideDeletionPopup}/>
	}

}

DeleteAccountComponent.propTypes = {
	onHideDeletionPopup: PropTypes.func.isRequired
}

export default withRouter(DeleteAccountComponent)
