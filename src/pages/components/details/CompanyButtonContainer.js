import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../../css/details/companyButtonContainer.css';


class CompanyButtonContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClickDonate = this.handleClickDonate.bind(this);
		this.handleClickEnter = this.handleClickEnter.bind(this);
	}

	handleClickDonate() {
		this.props.history.push(window.location.pathname + '/donate');
	}

	handleClickEnter() {
		this.props.history.push(window.location.pathname + '/chat');
	}

	render() {
		return (
			<Container className="companyButtonContainer">
				<h5>Möchtest du {this.props.name} unterstützen?</h5>
				<Row className="buttonRow">
					<Col className="buttonCol">
						<img onClick={this.handleClickDonate} src="/assets/icons/spenden.svg" alt={"Spende-Icon"}/>
					</Col>
					<Col className="buttonCol">
						<img onClick={this.handleClickEnter} src="/assets/icons/betreten.svg" alt={"Betreten-Icon"}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default withRouter(CompanyButtonContainer)
