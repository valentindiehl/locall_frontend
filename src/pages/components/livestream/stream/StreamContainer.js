import React, {Component} from "react";
import {socket} from "../../../../App";
import "../../../css/livestream/stream.css";
import {Spinner} from "react-bootstrap";


const streamLinkPrefix= "https://www.youtube.com/embed/";

export default class StreamContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			//TODO: Initialize with correct value
			participantCount: 0
		}

	}


	componentDidMount() {

		socket.on("joinedLiveStream", (data) => {
			this.setState({
				participantCount: data.participantCount
			})
		});
		socket.on("leftLiveStream", (data) => {
			this.setState({
				participantCount: data.participantCount
			})
		});

	}

	render() {

		return (
			<div className={"white-box extra-padding"}>
				{!!this.props.event ? (
					<div>
						<h3 style={{fontFamily: "Lato"}}>{this.props.event.artistName}</h3>
						<div className={"inline-div"}>
							<img src="/assets/icons/icons-live.svg" alt="Live-Icon" className={"stream-icons"}/><p className={"company-name"}>&nbsp;{this.props.event.businessName}</p>
							<div className={"float-right inline-div"}>
								<img src="/assets/icons/viewer.svg" alt="Viewer-Icon" className={"stream-icons"}/><p className={"lighter-text"}>&nbsp;{this.state.participantCount} Teilnehmende</p>
							</div>
						</div>
						<div className={"center-content aspect-ratio"}>
							<iframe  src={streamLinkPrefix + this.props.event.livestreamURL} frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
						</div>
					</div>
				)  : (
					<div className="loadingSpinner">
						<Spinner size="lg" animation="grow"/>
					</div>
				)}
			</div>
		)
	}
}
