import React from "react";
import PasswordChangeSuccessRenderer from "./PasswordChangeSuccessRenderer";
import PasswordChangeFormComponent from "./PasswordChangeFormComponent";
import DeleteAccountButton from "../delete/DeleteAccountButton";
import DeleteAccountComponent from "../delete/DeleteAccountHandler";

export default class PasswordChangeFormContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			resetSuccessful: false,
			passwordChangeError: false,
			deleteAccount: false,
		};
		this.hideSuccessMessage = this.hideSuccessMessage.bind(this);
		this.showDeletionPopup = this.showDeletionPopup.bind(this);
		this.hideDeletionPopup = this.hideDeletionPopup.bind(this);
		this.showSuccessMessage = this.showSuccessMessage.bind(this);
	}

	hideSuccessMessage() {
		this.setState({
			resetSuccessful: false
		});
	}

	showSuccessMessage() {
		this.setState({
			resetSuccessful: true
		});
	}

	showDeletionPopup() {
		this.setState({
			deleteAccount: true
		})
	}

	hideDeletionPopup() {
		this.setState({
			deleteAccount: false
		})
	}

	render() {
		return (<>
				{this.state.deleteAccount && <DeleteAccountComponent
					onHideDeletionPopup={this.hideDeletionPopup}/>}

				{this.state.resetSuccessful && <PasswordChangeSuccessRenderer
					onHideSuccessMessage={this.hideSuccessMessage}/>}

				{!this.state.deleteAccount && !this.state.resetSuccessful && <PasswordChangeFormComponent
					onChangePasswordComplete={this.showSuccessMessage}/>}

				{!this.state.deleteAccount && !this.state.resetSuccessful && <DeleteAccountButton
					onShowDeletionPopup={this.showDeletionPopup}/>}
			</>
		)
	}
}

