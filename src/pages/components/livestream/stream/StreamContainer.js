import React, {Component} from "react";
import {socket} from "../../../../App";
import "../../../css/livestream/stream.css";
import {Spinner} from "react-bootstrap";
import EventHelper from "../../../../helpers/event-helper";
import Moment from "react-moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from "react-bootstrap/Button";


const streamLinkPrefix = "https://www.youtube.com/embed/";

export default class StreamContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			participantCount: 0,
			copied: false,
			copyValue: "Copy"
		}
		this.isLive = this.isLive.bind(this);
		this.renderSoonLive = this.renderSoonLive.bind(this);
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
							<iframe src={streamLinkPrefix + this.props.event.url + "?autoplay=1"} frameBorder="0"
									allowFullScreen
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
						</div>
						<Row className={"shareRow"}>
							<Col className={"feedbackCol"}><a
								target="_blank"
								href={"https://docs.google.com/forms/d/e/1FAIpQLSdOT_ne2PNSSvjdnJeZ8xnGmf0uJ0p-FoTvZ7DhaJUDG_foxg/viewform?usp=sf_link"}>Feedback
								geben</a></Col>
							<Col className={"shareCol"}>
								<OverlayTrigger
									onEnter={() => this.setState({copyValue: "Copy"})}
									trigger="click"
									key="top"
									placement="top"
									overlay={
										<Popover id={"popover-positioned-top"}>
											<Popover.Content>
												<input className={"shareLink"} disabled type={"text"} value={window.location.href} /><CopyToClipboard text={window.location.href}
																						onCopy={() => this.setState({copied: true, copyValue: "✓"})}>
												<Button className={"shareButton"}>{this.state.copyValue}</Button>
											</CopyToClipboard>
											</Popover.Content>
										</Popover>
									}
								>
									<span><img src={"/assets/icons/share.svg"} alt={"Share"}/>Teilen</span>
								</OverlayTrigger>
							</Col>
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
