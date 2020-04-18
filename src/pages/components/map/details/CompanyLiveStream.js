import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Moment from "react-moment";
import 'moment/locale/de';

import '../../../css/details/companyLiveStream.css';
import EventHelper from "../../../../helpers/event-helper";
import Col from "react-bootstrap/Col";
import {withRouter} from "react-router-dom";
import Row from "react-bootstrap/Row";


class CompanyLiveStream extends Component {
	constructor(props) {
		super(props);
		this.renderEvents = this.renderEvents.bind(this);
		this.handleClickOnLive = this.handleClickOnLive.bind(this);
	}

	handleClickOnLive(eventId) {
		this.props.history.push("/live/" + eventId);
	}

	renderCurrentLiveEvents(events) {
		return events.map((e, index) => {
			return (
				<Container key={index} className="companyLiveStream">
					<h5>Jetzt live — {e.artistName}</h5>
					<Row className="buttonRow">
						<Col className="buttonCol">
							<img onClick={() => this.handleClickOnLive(e._id)} src={"/assets/icons/button-event.svg"}
								 alt={"Live Event"}/>
						</Col>
					</Row>
					<p className={"eventSummary"} dangerouslySetInnerHTML={{__html: e.summary}}/>
				</Container>
			);
		})
	}

	renderSoonLiveEvents(events) {
		return events.map((e, index) => {
			return (
				<div key={index} className={"companySoonLive"}>
					<div className={"soonLiveFromNow"}>
						<Moment locale={"de"} fromNow>{e.startingTime}</Moment>
					</div>
					<div className={"soonLiveTitle"}>
						{e.artistName}
					</div>
					<div className={"soonLiveDate"}>
						<Moment locale={"de"} format={"DD. MMMM HH:mm"}>{e.startingTime}</Moment>
					</div>
				</div>
			)
		})
	}

	renderEvents() {
		if (!this.props.events) return null;
		const currentlyLive = EventHelper().currentlyLive(this.props.events);
		if (!!currentlyLive.length) {
			return this.renderCurrentLiveEvents(currentlyLive);
		}
		const soonLive = EventHelper().soonLive(this.props.events);
		if (!!soonLive.length) {
			return (
				<Container className="companyLiveStream">
					<h5>Nächste LIVE Events</h5>
					{this.renderSoonLiveEvents(soonLive)}
				</Container>
			);
		}
	}

	render() {
		return (
			<>
				{this.renderEvents()}
			</>
		);
	}
}

export default withRouter(CompanyLiveStream)
