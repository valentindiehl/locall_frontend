import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../css/footer/footerContainer.css';

export default class FooterLinks extends Component {
	render() {
		return (
			<p className="footerLinksText">
				<a className="footerLink" target="_blank"
					  rel="noopener noreferrer" to="/imprint">Impressum</a>
				<a className="footerLink" target="_blank"
					  rel="noopener noreferrer" to="/privacy-policy">Datenschutz</a>
			</p>
		);
	}
}
