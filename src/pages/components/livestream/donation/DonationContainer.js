import React, {Component} from "react";
import DonationContentContainer from "../../map/donation/DonationContentContainer";
import LoadingComponent from "../../LoadingComponent";

export default class DonationContainer extends Component {
	render() {
		return (
			<>
				{!!this.props.event && <div className={"white-box extra-padding"}>
					<h5>{this.props.event.businessName} unterstützen</h5>
					<p>Dein Geld geht zu 50 % an das Lokal und zu 50 % an den Künstler.</p>
					<DonationContentContainer/>
				</div>}
				{!this.props.event && <LoadingComponent />}
			</>
		)
	}
}
