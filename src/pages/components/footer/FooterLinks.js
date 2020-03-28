import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../css/footer/footerContainer.css';

export default class FooterLinks extends Component {
	render() {
		return (
			<p className="footerLinksText">
				<Link className="footerLink" to="/imprint">Impressum</Link>
				<Link className="footerLink" to="/privacy-policy">Datenschutz</Link>
			</p>
		);
	}
}
