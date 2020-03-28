import React, {Component} from "react";

export default class ChatRoomContainer extends Component {
	render() {
		return(
			<h1>I bims Table {this.props.match.params.table}</h1>
		)
	}
}
