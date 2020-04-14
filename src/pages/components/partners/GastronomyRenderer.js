import React, {Component} from "react";
import {Link} from "react-router-dom";
import PartnerTile from "./PartnerTile";
import * as PropTypes from "prop-types"

export default class GastronomyRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderBusinesses = this.renderBusinesses.bind(this);
	}

	renderBusinesses() {
		return this.props.businesses.map((business, index) => {
			return <PartnerTile business={business} key={index} className={business.type}/>
		})
	}

	render() {
		return (<>
				<h5>Gastronomie</h5>
				<p>Einige Cafés, Restaurants und Bars arbeiten bereits mit uns zusammen. Unser größtes Anliegen ist
					es, unser Netzwerk immer weiter zu vergrößern, um möglichst viele Gastronomien in dieser
					schwierigen Phase zu unterstützen. Du besitzt selbst ein Lokal und möchtest LOCALL beitreten?
					Dann registriere dich <Link to={"/register/gastro"}>hier</Link>.</p>
				<div className="partnersGrid">
					{this.props.businesses && this.renderBusinesses()}
				</div>
			</>
		);
	}
}

GastronomyRenderer.propTypes = {
	businesses: PropTypes.array
}
