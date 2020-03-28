import React, {Component} from 'react';
import {Container} from "react-bootstrap";

export default class AddTableButton extends Component {

	handleClick = () => {
		this.props.addTable();
	}

	render() {
		return (
			<Container onClick={this.handleClick} className="table">
				+<br />Add Table
			</Container>
		)
	}

}
