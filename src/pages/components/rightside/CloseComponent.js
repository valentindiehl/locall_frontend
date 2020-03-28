import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";

import '../../css/details/companyActionContainer.css';


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
			<Container className="actionContainer">
				<img onClick={this.handleClick} src="/assets/icons/close.svg" alt={"Close"}/>
			</Container>
		);
	}
}

export default withRouter(CloseComponent)
