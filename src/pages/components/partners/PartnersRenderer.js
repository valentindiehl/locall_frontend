import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import PartnerTile from "./PartnerTile";
import * as PropTypes from "prop-types"

export default class PartnersRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderBusinesses = this.renderBusinesses.bind(this);
	}

	renderBusinesses() {
		console.log(this.props.businesses);
		return this.props.businesses.map((business, index) => {
			return <PartnerTile business={business} key={index}/>
		})
	}

	render() {
		return (
			<div className="Fade">
				<Container className="contentContainer partners">
					<h3>Unsere Partner</h3>
					<p>Einige Cafés, Restaurants und Bars arbeiten bereits mit uns zusammen. Unser größtes Anliegen ist
						es, unser Netzwerk immer weiter zu vergrößern, um möglichst viele Gastronomien in dieser
						schwierigen Phase zu unterstützen. Du besitzt selbst ein Lokal und möchtest LOCALL beitreten?
						Dann registriere dich <Link to={"/register"}>hier</Link>.</p>
					<div className="partnersGrid">
						{this.props.businesses && this.renderBusinesses()}
					</div>
				</Container>
			</div>
		);
	}
}

PartnersRenderer.propTypes = {
	businesses: PropTypes.array
}
