import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import MuteHandler from "./MuteHandler";

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

export default class MuteContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {muted: false};
		this.handleParticipantMute = this.handleParticipantMute.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleParticipantMute(muteState) {
		this.props.onParticipantMute(muteState);
	}

	handleClick() {
		const newMuteState = !this.state.muted;
		this.setState({muted: newMuteState});
	}

	render() {
		return (
			<div className={"chatBlockButtonWrapper"}>
				<MuteHandler
					localStream={this.props.localStream}
					onParticipantMute={this.handleParticipantMute}
					muted={this.state.muted}/>
				<MuteButton muted={this.state.muted}
							onClick={this.handleClick}/>
			</div>
		)
	}
}


