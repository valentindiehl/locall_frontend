import React, {Component} from "react";
import HostingRenderer from "./HostingRenderer";
import {partners} from "./data/hosting";
import * as PropTypes from "prop-types";
import GastronomyRenderer from "./GastronomyRenderer";

export default class HostingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return <HostingRenderer businesses={partners}/>
	}
}

GastronomyRenderer.propTypes = {
	businesses: PropTypes.array
}
