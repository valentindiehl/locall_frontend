import React, {Component} from 'react';
import RegisterContentRenderer from "./RegisterContentRenderer";
import * as PropTypes from 'prop-types';

export default class RegisterContentComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {isUser: true}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(event) {
		let target = event.currentTarget.className;
		this.setState({
			isUser: target.includes("userCol")
		});
	}

	render() {
		return <RegisterContentRenderer
			onRegistrationComplete={this.props.onRegistrationComplete}
			onToggle={this.handleToggle}
			isUser={this.state.isUser}
		/>
	}
}

RegisterContentComponent.propTypes = {
	onRegistrationComplete: PropTypes.func.isRequired
}
