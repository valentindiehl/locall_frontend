import React, {Component} from 'react';

import '../../css/footer/footerContainer.css';

export default class FooterLinks extends Component {
	render() {
		return (
			<p className="footerLinksText">
				<a className="footerLink" href="/imprint">Impressum</a>
				<a className="footerLink" href="/privacy-policy">Datenschutz</a>
			</p>
		);
	}
}
