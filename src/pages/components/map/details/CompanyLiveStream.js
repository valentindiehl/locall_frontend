import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Moment from "react-moment";
import 'moment/locale/de';

import '../../../css/details/companyLiveStream.css';
import EventHelper from "../../../../helpers/event-helper";


export default class CompanyLiveStream extends Component {
	constructor(props) {
		super(props);
		this.renderEvents = this.renderEvents.bind(this);
	}

	renderCurrentLiveEvents(events) {
		return events.map((e, index) => {
			return (
				<Container key={index} className="companyLiveStream">
					<h5>Jetzt live! {e.name}</h5>
					<img src={"/assets/icons/button-event.svg"} alt={"Live Event"}/>
					<p>{e.shortDescription}</p>
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

