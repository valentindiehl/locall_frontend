import React, {Component} from "react";
import DeleteAccountComponent from "./DeleteAccountHandler";
import DeleteAccountRenderer from "./DeleteAccountRenderer";

export default class DeleteAccountContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			deleteAccount: false,
		};
		this.showDeletionPopup = this.showDeletionPopup.bind(this);
		this.hideDeletionPopup = this.hideDeletionPopup.bind(this);
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

				{!this.state.deleteAccount && <DeleteAccountRenderer
					onShowDeletionPopup={this.showDeletionPopup}/>}

			</>
		)
	}


}
