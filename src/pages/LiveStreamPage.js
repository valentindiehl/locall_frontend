import React, {Component} from "react";
import {socket} from "../App";
import "./css/livestream/general.css"
import LiveStreamPageRenderer from "./components/livestream/LiveStreamPageRenderer";
import {withRouter} from "react-router-dom";

class LiveStreamPage extends Component {

	constructor(props) {
		super(props);
		this.handleBackToMap = this.handleBackToMap.bind(this);
	}

	componentDidMount() {
		console.log("Live Stream did mount");
		socket.on("joinedLiveStream", (data) => {
			console.log(data.user, "joined. Now", data.participantCount);
		});
		socket.on("leftLiveStream", (data) => {
			console.log("Participant left. Now", data.participantCount);
		});
		this.joinStream();
	}

	joinStream() {
		socket.emit("joinLiveStream", {liveStreamId: this.props.match.params.id});
	}

	componentWillUnmount() {
		console.log("Live Stream will unmount");
		socket.off("joinedLiveStream");
		socket.off("leftLiveStream");
		socket.emit("leaveLiveStream");
	}

	handleBackToMap() {
		window.location.pathname = "/";
	}

	render() {
		return <LiveStreamPageRenderer {...this.props} onClick={this.handleBackToMap}/>
	}
}

export default withRouter(LiveStreamPage)
