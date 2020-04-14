import React, {Component} from "react";
import {socket} from "../../../../App";

import "../../../css/livestream/stream.css";

export default class StreamContainer extends Component {

	stream = "https://www.youtube.com/embed/";

	participantCount = 0;

	constructor(props) {
		super(props);

		this.state = {
			participantCount: this.participantCount
		}

		this.stream = this.stream + "VideoId";

	}


	componentDidMount() {

		socket.on("joinedLiveStream", () => {
			this.setState({
				participantCount: ++this.participantCount
			})
		});
		socket.on("leftLiveStream", () => {
			this.setState({
				participantCount: --this.participantCount
			})
		});

	}

	render() {

		const { participantCount } = this.state;

		return (
			<div className={"white-box extra-padding"}>
				<h3>Event Titel</h3>
				<div className={"inline-div"}>
					<img src="/assets/icons/icons-live.svg" alt="Live-Icon" className={"stream-icons"}/><p className={"company-name"}>&nbsp;CompanyName</p>
					<div className={"float-right inline-div"}>
						<img src="/assets/icons/viewer.svg" alt="Viewer-Icon" className={"stream-icons"}/><p className={"lighter-text"}>&nbsp;{participantCount} Teilnehmende</p>
					</div>
				</div>
				<div className={"center-content aspect-ratio"}>
					<iframe  src={this.stream} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
				</div>
			</div>
		)
	}
}
