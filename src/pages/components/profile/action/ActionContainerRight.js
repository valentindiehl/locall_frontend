import React, {Component} from "react";

import ActionContainerRenderer from "./ActionContainerRenderer";
import * as PropTypes from "prop-types";

export default class ActionContainerRight extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.setRedirectToUserProfileForBusiness();
	}

	render() {
		return <ActionContainerRenderer onClick={this.handleClick}
										className={"actionContainerRight"}
										text={"Zum Nutzerprofil"}
										iconSrc={"/assets/icons/forward-arrow-dark.svg"}
										alt={"Right-Arrow"}
										imageRight={true}/>
	}
}

ActionContainerRight.propTypes = {
	setRedirectToUserProfileForBusiness: PropTypes.func.isRequired
}
