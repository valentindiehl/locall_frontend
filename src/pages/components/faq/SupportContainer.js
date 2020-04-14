import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

import '../../css/general/general-styles.css';
import '../../css/faq/support.css';

export default class SupportContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="settings-container support">
				<div className="box-heading">
					<img className="iconProfile" src={"/assets/icons/support.svg"} alt={"Mail-Icon"}/>
					<h4>Du konntest keine Antwort finden? </h4>
				</div>
				<div className="white-box">
					<div className="passwordResetSubmittedText">
						<p>Stell uns deine Frage.
							<br /> Wir kümmern uns schnellstmöglich um dein Anliegen. </p>
						<Button className="large-button button-orange" variant="link" onClick={()=> window.open("https://locall.atlassian.net/servicedesk/customer/portals", "_blank")}>
							SCHREIB UNS
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
