import React, {Component} from 'react';

import '../../css/login/registerContainer.css';
import RegisterContainerRenderer from "./RegisterContainerRenderer";


export default class RegisterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			registered: false
		};
		this.handleRegistrationComplete = this.handleRegistrationComplete.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({
				width: window.innerWidth
			})
		});
	}

	handleRegistrationComplete() {
		this.setState({
			registered: true
		})
	}

	render() {
		return (
			<RegisterContainerRenderer
				isMobile={this.state.width < 1024}
				registered={this.state.registered}
				onRegistrationComplete={this.handleRegistrationComplete}
			/>
		)
	}
}
