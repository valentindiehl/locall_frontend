import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import StreamContainer from "./stream/StreamContainer";
import DonationContainer from "./donation/DonationContainer";
import DescriptionContainer from "./description/DescriptionContainer";
import Col from "react-bootstrap/Col";
import EventHelper from "../../../helpers/event-helper";
import {fetchEvents} from "../../../redux/actions/eventsActions";
import {connect} from "react-redux";

function mapStateToProps(state, ownProps) {

	let eventFiltered = EventHelper().eventById(state.events.eventsData , ownProps.match.params.id);
	return {
		event: eventFiltered
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchEventData: () => dispatch(fetchEvents())
	}
}


class LeftContainer extends Component {

	componentDidMount() {
		this.props.fetchEventData();
	}

	render() {
		return (
			<>
				<Row>
					<Col md={12}>
						<StreamContainer {...this.props}/>
					</Col>
				</Row>
				<Row>
					<Col md={7}>
						<DonationContainer event={this.props.event}/>
					</Col>
					<Col md={5}>
						<DescriptionContainer {...this.props}/>
					</Col>
				</Row>
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer)
