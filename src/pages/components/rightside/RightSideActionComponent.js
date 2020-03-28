import React, {Component} from 'react';
import CloseComponent from "./CloseComponent";

import '../../css/details/companyActionContainer.css';
import Container from "react-bootstrap/Container";
import BackComponent from "./BackComponent";


export default class RightSideActionComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container className="actionContainer">
				{!!this.props.renderBack && <BackComponent/>}
				<CloseComponent/>
			</Container>

		);
	}
}

