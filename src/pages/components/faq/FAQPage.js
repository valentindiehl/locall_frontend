import React from "react";
import {faqs} from "./data/faq";
import '../../css/general/general-styles.css';
import '../../css/faq/faq.css';
import FAQPageRenderer from "./FAQPageRenderer";


export default class FAQPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbar: {
				hideLogin: false,
				isLoggedIn: false
			},
		};
		this.toggleCollapse = this.toggleCollapse.bind();
	}

	toggleCollapse = function (event) {
		let currentTarget = event.currentTarget;
		if (currentTarget.classList.contains("open")) {
			currentTarget.classList.remove("open");
		} else {
			currentTarget.classList.add("open");
		}
	};

	render() {
		return <FAQPageRenderer faqs={faqs} onClick={this.toggleCollapse}/>
	}
}
