import React, {Component} from "react";
import {socket} from "../App";
import "./css/livestream/general.css"
import LiveStreamPageRenderer from "./components/livestream/LiveStreamPageRenderer";

export default class LiveStreamPage extends Component {

	componentDidMount() {
		console.log("Live Stream did mount");
		socket.on("joinedLiveStream", (data) => {
			console.log(data.user, "joined. Now", data.participantCount);
		});
		socket.on("leftLiveStream", (data) => {
			console.log("Participant left. Now", data.participantCount);
		})
		socket.emit("joinLiveStream", {liveStreamId: this.props.match.params.id});
	}

	componentWillUnmount() {
		console.log("Live Stream will unmount");
		socket.off("joinedLiveStream");
		socket.off("leftLiveStream");
		socket.emit("leaveLiveStream");
	}

	render() {
		return <LiveStreamPageRenderer/>
	}
}
