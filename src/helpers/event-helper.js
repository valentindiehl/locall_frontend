const moment = require('moment');

const EventHelper = () => {
	"use strict"

	function filterByBusiness(events, businessId) {
		return events.filter(e => e.businessId === businessId);
	}

	function currentlyLive(events) {
		return events.filter(e => moment().isAfter(e.startingTime));
	}

	function soonLive(events) {
		return events.filter(e => moment(e.startingTime).diff(moment(), "days") < 14);
	}

	function currentlyLiveForBusiness(events, businessId) {
		return currentlyLive(filterByBusiness(events, businessId));
	}

	function soonLiveForBusiness(events, businessId) {
		return soonLive(filterByBusiness(events, businessId));
	}

	function eventById(events, id) {
		const event = events.filter(e => e._id === id);
		if (event.length === 1) return event[0];
		return null;
	}

	return {
		filterByBusiness,
		currentlyLive,
		soonLive,
		currentlyLiveForBusiness,
		soonLiveForBusiness,
		eventById
	}
}

export default EventHelper;
