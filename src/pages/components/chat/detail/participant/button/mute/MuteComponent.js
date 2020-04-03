import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {socket} from "../../../../../../../App";

const MuteButton = (props) => {
	return props.muted ?
		(<Button className={"chatButton chatBlockButton muteButton muted"} onClick={props.onClick}>
			<img alt="mic" src={"/assets/icons/microphone-white.svg"}/>
			<div className={"muteButtonText"}>Unmute</div>
		</Button>)
		: (<Button className={"chatButton chatBlockButton muteButton"} onClick={props.onClick}>
			<img alt="mic" src={"/assets/icons/microphone-slash-white.svg"}/>
			<div className={"muteButtonText"}>Mute</div>
		</Button>)
}

export default class MuteComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {muted: false};
		this.handleParticipantMute = this.handleParticipantMute.bind(this);
	}

	componentDidMount() {
		const self = this;
		socket.on('participantMute', function (data) {
			console.log("muted", data);
			self.props.onMute({socketId: data.socketId, muted: true});
		});
		socket.on('participantUnmute', function (data) {
			self.props.onMute({socketId: data.socketId, muted: false});
		});
	}

	componentWillUnmount() {
		socket.off('participantMute');
		socket.off('participantUnmute');
	}

	handleParticipantMute() {
		if (!this.props.localStream) return;
		const newMuteState = !this.state.muted;
		const self = this;
		this.setState({muted: newMuteState}, () => {
			self.props.localStream.getAudioTracks().forEach(t => t.enabled = !newMuteState);
			if (newMuteState) {
				socket.emit('mute');
			} else {
				socket.emit('unmute');
			}
		});

	}


	render() {
		return (
			<div className={"chatBlockButtonWrapper"}>
				<MuteButton muted={this.state.muted}
							onClick={this.handleParticipantMute}/>
			</div>
		)
	}
}


