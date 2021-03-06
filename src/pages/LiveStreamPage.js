import React, {Component} from "react";
import {socket} from "../App";
import "./css/livestream/general.css"
import LiveStreamPageRenderer from "./components/livestream/LiveStreamPageRenderer";
import {withRouter} from "react-router-dom";

class LiveStreamPage extends Component {

	constructor(props) {
		super(props);
		this.handleBackToMap = this.handleBackToMap.bind(this);
		this.joinStream = this.joinStream.bind(this);
	}

	componentDidMount() {
		console.log("Live Stream did mount");
		socket.on("joinedLiveStream", (data) => {
			console.log(data.user, "joined. Now", data.participantCount);
		});
		socket.on("leftLiveStream", (data) => {
			console.log("Participant left. Now", data.participantCount);
		});
		socket.on('disconnect', () => this.joinStream(false));
		this.joinStream(true);
	}

	joinStream(withMessage) {
		socket.emit("joinLiveStream", {
			liveStreamId: this.props.match.params.id,
			withMessage: withMessage
		});
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
