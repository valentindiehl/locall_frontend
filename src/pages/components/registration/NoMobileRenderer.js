import React, {Component} from "react";
import {Button, Container} from "react-bootstrap";
import {fetchEvents} from "../../../redux/actions/eventsActions";
import {connect} from "react-redux";
import EventHelper from "../../../helpers/event-helper";
import Moment from "react-moment";
import '../../css/mobile/general.css';


function mapStateToProps(state) {
	return {
		events: state.events.eventsData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchEventData: () => dispatch(fetchEvents())
	}
}

class NoMobileRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderSoonLive = this.renderSoonLive.bind(this);
		this.renderCurrentLiveEvents = this.renderCurrentLiveEvents.bind(this);
	}

	componentDidMount() {
		this.props.fetchEventData();
	}

	renderSoonLive() {
		if (!this.props.events) return null;
		const soonLive = EventHelper().soonLive(this.props.events);
		if (!soonLive.length) return null;
		return (
			<div className={"mobileLiveWrapper"}>
				<h5>Demnächst Live</h5>
				{this.renderSoonLiveList(soonLive)}
			</div>
		)
	}

	renderCurrentLiveEvents() {
		if (!this.props.events) return null;
		const nowLive = EventHelper().currentlyLive(this.props.events);
		if (!nowLive.length) return null;
		return (
			<div className={"mobileLiveWrapper"}>
				<h5>Jetzt LIVE</h5>
				{this.renderCurrentLiveList(nowLive)}
			</div>
		)
	}

	renderEvent(e) {
		return (
			<>
				<div className={"soonLiveFromNow"}>
					<Moment locale={"de"} fromNow>{e.startingTime}</Moment>
				</div>
				<div className={"soonLiveTitle"}>
					{e.artistName}
				</div>
				<div className={"soonLiveDate"}>
					<Moment locale={"de"}
							format={"DD. MMMM HH:mm"}>{e.startingTime}</Moment> @ <strong>{e.businessName}</strong>
				</div>
			</>
		)
	}

	renderSoonLiveList(events) {
		return events.map((e, index) => {
			return (
				<div key={index} className={"companySoonLive"}>
					{this.renderEvent(e)}
					<hr/>
				</div>
			)
		})
	}

	renderCurrentLiveList(events) {
		return events.map((e, index) => {
			return (
				<div key={index} className={"companyNowLive"}>
					{this.renderEvent(e)}
					<Button href={"/live/" + e._id} className={"toLiveEvent"}>Event öffnen</Button>
					<hr/>
				</div>
			)
		})
	}

	render() {
		return (
			<Container className={"noMobileMap"}>
				<h4>Du möchtest mitmachen?</h4>
				<p>Leider ist unsere Kartenansicht im Moment nur auf dem Desktop benutzbar. Setz dich doch einfach
					schnell
					an deinen Laptop oder PC und melde dich dort an. In der Zwischenzeit arbeiten wir natürlich auf
					Hochtouren an einer mobilen Version.<br/> Danke für deine Geduld!
					<span role="img" aria-label="yellow-heart">💛</span><br/><br/>
				</p>
				<p>Unsere LIVE Events kannst du auch auf dem Smartphone verfolgen!</p>
				{this.renderCurrentLiveEvents()}
				{this.renderSoonLive()}
			</Container>
		)
	}


}

export default connect(mapStateToProps, mapDispatchToProps)(NoMobileRenderer);
