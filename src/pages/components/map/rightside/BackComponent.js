import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";

class BackComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const backSteps = !!this.props.backSteps ? this.props.backSteps : 1
		this.props.history.push(window.location.pathname.split("/").slice(0, -backSteps).join("/"));
	}

	render() {
		return (
			<Container onClick={this.handleClick} className="backContainer">
				<img src={"/assets/icons/back-arrow.svg"} alt={"Back"}/>
				Zurück
			</Container>
		);
	}
}

export default withRouter(BackComponent)
