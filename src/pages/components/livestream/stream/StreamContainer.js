import React, {Component} from "react";
import {socket} from "../../../../App";
import "../../../css/livestream/stream.css";
import {Spinner} from "react-bootstrap";
import EventHelper from "../../../../helpers/event-helper";
import Moment from "react-moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const streamLinkPrefix = "https://www.youtube.com/embed/";

export default class StreamContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			participantCount: 0
		}
		this.isLive = this.isLive.bind(this);
		this.renderSoonLive = this.renderSoonLive.bind(this);
		this.handleShare = this.handleShare.bind(this);
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

	componentWillUnmount() {
		socket.off("joinedLiveStream");
		socket.off("leftLiveStream");
	}

	isLive(event) {
		return EventHelper().getTimeToEvent(event) <= 0;
	}

	renderSoonLive(time) {
		return (
			<div className={"soonLiveFromNow"}>
				<Moment locale="de" fromNow>{time}</Moment>
			</div>
		)
	}

	handleShare() {
		console.log("Share clicked");
	}

	render() {
		return (
			<div className={"streamWrapper white-box extra-padding"}>
				{!!this.props.event ? (
					<div>
						<h3 style={{fontFamily: "Lato"}}>{this.props.event.artistName}</h3>
						<div className={"inline-div"}>
							{this.isLive(this.props.event) &&
							<img src={"/assets/icons/icons-live.svg"} alt="Live-Icon" className={"stream-icons"}/>}
							{!this.isLive(this.props.event) && this.renderSoonLive(this.props.event.startingTime)}
							<p className={"company-name"}>&nbsp;{this.props.event.businessName}</p>
							<div className={"float-right inline-div"}>
								<img src={"/assets/icons/viewer.svg"} alt="Viewer-Icon" className={"stream-icons"}/><p
								className={"lighter-text"}>&nbsp;{this.state.participantCount} Teilnehmende</p>
							</div>
						</div>
						<div className={"center-content aspect-ratio"}>
							<iframe src={streamLinkPrefix + this.props.event.url} frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
						</div>
						<Row onClick={this.handleShare} className={"shareRow"} float={"right"}>
							<Col className={"shareCol"}><img src={"/assets/icons/share.svg"} alt={"Share"}/>Teilen</Col>
						</Row>
					</div>
				) : (
					<div className="loadingSpinner">
						<Spinner size="lg" animation="grow"/>
					</div>
				)}
			</div>
		)
	}
}
