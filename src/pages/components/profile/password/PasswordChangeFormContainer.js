import React from "react";
import PasswordChangeSuccessRenderer from "./PasswordChangeSuccessRenderer";
import PasswordChangeFormComponent from "./PasswordChangeFormComponent";

export default class PasswordChangeFormContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			resetSuccessful: false,
			passwordChangeError: false,
		};
		this.hideSuccessMessage = this.hideSuccessMessage.bind(this);
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

	render() {
		return (<>

				{this.state.resetSuccessful && <PasswordChangeSuccessRenderer
					onHideSuccessMessage={this.hideSuccessMessage}/>}

				{!this.state.resetSuccessful && <PasswordChangeFormComponent
					onChangePasswordComplete={this.showSuccessMessage}/>}

			</>
		)
	}
}

