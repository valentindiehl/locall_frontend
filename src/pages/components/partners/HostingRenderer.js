import React, {Component} from "react";
import PartnerTile from "./PartnerTile";

export default class HostingRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderBusinesses = this.renderBusinesses.bind(this);
	}

	renderBusinesses() {
		return this.props.businesses.map((business, index) => {
			return <PartnerTile className={"wideTile"} business={business} key={index}/>
		})
	}

	render() {
		return (<>
				<h5>Hosting</h5>
				<p>Wir danken unserem Hosting Partner, der uns einen Hosting-Server zur Verfügung stellt
					und ohne den diese Plattform nicht möglich wäre.</p>
				<div className="partnersGrid">
					{this.props.businesses && this.renderBusinesses()}
				</div>
			</>
		);
	}
}
