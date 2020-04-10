import React from "react";
import {faqs} from "./data/faq";
import '../../css/general/general-styles.css';
import '../../css/faq/faq.css';
import FAQPageRenderer from "./FAQPageRenderer";

/**
 * Stateful component handling FAQ page related logic.
 */
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
			[].forEach.call(document.getElementsByClassName("card-header open"), (element) => {
				element.classList.remove("open");
			});
			currentTarget.classList.add("open");
		}
	};

	render() {
		return <FAQPageRenderer faqs={faqs} onClick={this.toggleCollapse}/>
	}
}
