import React from "react";
import Container from "react-bootstrap/Container";
import SupportContainer from "./SupportContainer";
import FAQPage from "./FAQPage"

import '../../css/general/general-styles.css';
import '../../css/faq/faq.css';


export default class FAQContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbar: {
				hideLogin: false,
				isLoggedIn: false
			},
		};
	}


	render() {
		return (
			<div className="Fade">
				<Container className="contentContainer faq">
					<h3>FAQ</h3>
					<FAQPage/>
					<SupportContainer/>
				</Container>
			</div>
		);
	}
}
