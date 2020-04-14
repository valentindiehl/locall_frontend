import React, {Component} from "react";

export default class DescriptionContainer extends Component {
	render() {
		return (
			<div className={"white-box extra-padding"}>
				<h5 className={"lighter-text"}>Event-Beschreibung</h5>
				<br/>
				<p className={"lighter-text"}>Event Beschreibung wird als <b>formatierter</b> Text eingefügt? Dann müssen wir Injections beachten.</p>
			</div>
		)
	}
}
