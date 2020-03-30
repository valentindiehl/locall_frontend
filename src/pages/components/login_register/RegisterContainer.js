import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import ToggleContainer from "../landingpage/ToggleContainer";
import RegisterUserForm from "./RegisterUserForm";
import RegisterGastroForm from "./GastroRegisterForm";

import '../../css/login/registerContainer.css';


export default class RegisterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isUser: true,
			width: window.innerWidth,
			registered: false
		};
		this.setRegistered = this.setRegistered.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({
				width: window.innerWidth
			})
		});
	}

	setRegistered() {
		this.setState({
			registered: true
		})
	}

	handleToggle(event) {
		let target = event.currentTarget.className;
		this.setState({
			isUser: target.includes("userCol")
		});
	}

	render() {
		if (this.state.width <= 1024) {
			return (
				<div id="register">
					<Container className="registerContainer">
						<h4>Du möchtest mitmachen?</h4>
						<p>Leider ist unsere Seite im Moment nur auf dem Desktop benutzbar. Setz dich doch einfach
							schnell
							an deinen Laptop oder PC und melde dich dort an. In der Zwischenzeit arbeiten wir natürlich
							auf
							Hochtouren an einer mobilen Version.<br/> Danke für deine Geduld!<span role="img"
																								   aria-label="yellow-heart"> 💛</span><br/><br/>
						</p>
					</Container>
				</div>
			);
		} else {
			let form;
			if (this.state.isUser) {
				form = <RegisterUserForm history={this.props.history} setRegistered={this.setRegistered}/>;
			} else {
				form =
					<RegisterGastroForm history={this.props.history} setRegistered={this.setRegistered}/>;
			}
			if (this.state.registered) {
				return (
					<Container className="registerContainer">
						<h4 className="registeredThanks">DANKE,</h4>
						<p className="registeredMessage">dass du dich bei uns registriert hast <span role="img"
																									 aria-label="yellow-heart">💛</span>.<br/>
							Wir haben dir eine Email mit allen weiteren Infos geschickt und freuen uns schon auf dich!
						</p>
					</Container>
				);
			} else {

				return (
					<div id="register">
						<Container className="registerContainer">
							<h4>Du möchtest mitmachen?</h4>
							<ToggleContainer {...this.state} handler={this.handleToggle}/>
							{form}
						</Container>
					</div>
				);
			}
		}
	}
}
