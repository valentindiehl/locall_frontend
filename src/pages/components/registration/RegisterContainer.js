import React, {Component} from 'react';

import '../../css/login/registerContainer.css';
import '../../css/form/form.css';
import RegisterContainerRenderer from "./RegisterContainerRenderer";


export default class RegisterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registered: false
		};
		this.handleRegistrationComplete = this.handleRegistrationComplete.bind(this);
	}

	handleRegistrationComplete() {
		this.setState({
			registered: true
		})
	}

	render() {
		return (
			<RegisterContainerRenderer
				registered={this.state.registered}
				onRegistrationComplete={this.handleRegistrationComplete}
				gastro={this.props.gastro}
			/>
		)
	}
}
