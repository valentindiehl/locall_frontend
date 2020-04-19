import React, {Component} from "react";
import DonationContentContainer from "../../map/donation/DonationContentContainer";
import LoadingComponent from "../../LoadingComponent";

export default class DonationContainer extends Component {
	render() {
		return (
			<>
				{!!this.props.event && <div className={"white-box extra-padding"}>
					<h5>Geld senden</h5>
					<p>Dein Geld geht an {this.props.event.artistName}.</p>
					<div style={{textAlign: "center"}}>
						<DonationContentContainer paypal={this.props.event.businessPayPal}/>
					</div>
				</div>}
				{!this.props.event && <LoadingComponent/>}
			</>
		)
	}
}
