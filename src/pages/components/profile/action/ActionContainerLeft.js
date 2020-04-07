import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import ActionContainerRenderer from "./ActionContainerRenderer";
import * as PropTypes from "prop-types";

class ActionContainerLeft extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.props.fromProfile) {
			this.props.setRedirectToBusinessProfile();
		} else {
			this.props.history.push("/app");
		}
	}

	render() {
		const text = this.props.fromProfile ? "Zurück zum Gastro-Profil" : "Zurück zur Karte";
		return <ActionContainerRenderer onClick={this.handleClick}
										text={text}
										iconSrc={"/assets/icons/back-arrow-dark.svg"} alt={"Left Arrow"}
										className={"actionContainerLeft"}/>
	}
}

ActionContainerLeft.propTypes = {
	fromProfile: PropTypes.bool.isRequired,
	setRedirectToUserProfileForBusiness: PropTypes.func
}

export default withRouter(ActionContainerLeft)
