import React, {Component} from "react";
import LoadingComponent from "../../LoadingComponent";

export default class DescriptionContainer extends Component {
	render() {
		return (
			<div className={"white-box extra-padding"}>
				<h5>Event-Beschreibung</h5>
				<br/>
				{!!this.props.event ? (
					<p dangerouslySetInnerHTML={{__html: this.props.event.description}}/>
				) : (
					<LoadingComponent/>
				)}
			</div>
		)
	}
}
