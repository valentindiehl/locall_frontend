import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";

import '../../css/landingpage/footerContainer.css';


export default class FooterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: null
		}
	}

	componentWillMount() {
		let width = window.innerWidth;
		if (width <= 768) {
			this.setState({isHidden: false});
		} else {
			this.setState({isHidden: true});
		}
	}

	render() {
		return (
			<Container fluid className="footerContainer">
				<footer>
					<a href="https://adabay.rocks" target="_blank" rel="noopener noreferrer">
						<img className="adabayLogo" src="/assets/icons/adabayLogo.png" alt={"AdabayLogo"}/>
						<p className="adabayHosting">HOSTED BY ADABAY GMBH <br/>
							DIGITAL MEDIA AGENCY</p>
					</a>
					<SocialLinks isHidden={this.state.isHidden}/>
					<p className="copyright">&copy; 2020 LOCALL</p>
					<FooterLinks/>
				</footer>
			</Container>
		);
	}
}
