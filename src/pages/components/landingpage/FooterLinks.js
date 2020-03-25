import React, {Component} from 'react';

import '../../css/landingpage/footerContainer.css';

export default class FooterLinks extends Component {
	render() {
		return (
			<p>
				<a className="footerLink" href="/imprint">Impressum</a>
				<a className="footerLink" href="/privacy-policy">Datenschutz</a>
			</p>
		);
	}
}
