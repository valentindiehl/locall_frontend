import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {withRouter} from "react-router-dom";

class CloseComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.history.push('/app');
	}

	render() {
		return (
			<Container className="closeContainer">
				<img onClick={this.handleClick} src="/assets/icons/close.svg" alt={"Close"}/>
			</Container>
		);
	}
}

export default withRouter(CloseComponent)
