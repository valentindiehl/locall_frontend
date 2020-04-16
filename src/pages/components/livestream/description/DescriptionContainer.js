import React, {Component} from "react";
import {Spinner} from "react-bootstrap";

export default class DescriptionContainer extends Component {
	render() {
		return (
			<div className={"white-box extra-padding"}>
				<h5 className={"lighter-text"}>Event-Beschreibung</h5>
				<br/>
				{!!this.props.event ? (
					<p className={"lighter-text"}>{this.props.event.livestreamDescription}</p>
				) : (
					<div className="loadingSpinner">
					<Spinner size="lg" animation="grow"/>
					</div>
				)}
			</div>
		)
	}
}
