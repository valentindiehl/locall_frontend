import React, {Component} from "react";
import DonationContentContainer from "../../map/donation/DonationContentContainer";
import LoadingComponent from "../../LoadingComponent";

export default class DonationContainer extends Component {
	render() {
		return (
			<>
				{!!this.props.event && <div className={"white-box extra-padding"}>
					<h5>{this.props.event.businessName} unterstützen</h5>
					<p>Dein Geld geht zu 50 % an {this.props.event.businessName} und zu 50 % an {this.props.event.artistName}.</p>
					<div style={{textAlign: "center"}}>
						<DonationContentContainer/>
					</div>
				</div>}
				{!this.props.event && <LoadingComponent/>}
			</>
		)
	}
}
