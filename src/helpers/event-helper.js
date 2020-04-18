const moment = require('moment');

const EventHelper = () => {
	"use strict"

	function filterByBusiness(events, businessId) {
		return events.filter(e => e.businessId === businessId);
	}

	function currentlyLive(events) {
		let result = events.filter(e => moment(e.startingTime).diff(moment(), "minutes") < 15);
		sortByStartTime(result);
		return result;
	}

	function soonLive(events) {
		let result = events.filter(e => moment(e.startingTime).diff(moment(), "days") < 14 &&
			moment(e.startingTime).diff(moment(), "minutes") >= 15);
		sortByStartTime(result);
		return result;

	}

	function eventById(events, id) {
		const event = events.filter(e => e._id === id);
		if (event.length === 1) return event[0];
		return null;
	}

	function sortByStartTime(events) {
		events.sort((a, b) => moment(a.startingTime).diff(moment(b.startingTime)));
	}

	function getTimeToEvent(event, unit = "minutes") {
		return moment(event.startingTime).diff(moment(), unit);
	}

	return {
		filterByBusiness,
		currentlyLive,
		soonLive,
		eventById,
		getTimeToEvent
	}
}

export default EventHelper;
