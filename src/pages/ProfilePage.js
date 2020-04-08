import React from "react";
import ApiHelper from "../helpers/api-helper";
import ProfilePageRenderer from "./components/profile/ProfilePageRenderer";
import LoadingComponent from "./components/LoadingComponent";

import './css/profile/profile.css';
import './css/general/general-styles.css';
import './css/general/form-styles.css';
import './css/profile/profile-forms.css';

export default class ProfilePage extends React.Component {

	_isMounted = false;

	constructor(props) {
		super(props);
		this.state = {
			isBusiness: false,
			fromProfile: false,
			showBusiness: false,
			showUserProfileForBusiness: false,
			isLoading: true,
			description: "",
			paypal: ""
		};
		this.setRedirectToUserProfileForBusiness = this.setRedirectToUserProfileForBusiness.bind(this);
		this.setRedirectToBusinessProfile = this.setRedirectToBusinessProfile.bind(this);
	}

	componentDidMount() {
		this._isMounted = true;
		const callback = (result) => {
			if (this._isMounted) {
				if (!!result.business) {
					this.setState({
						isBusiness: true,
						showBusiness: true,
						isLoading: false,
						businessId: result.business.id,
						description: result.business.message,
						paypal: result.business.paypal
					});
				} else {
					this.setState({
						isBusiness: false,
						showBusiness: false,
						isLoading: false
					})
				}
			}
		}
		ApiHelper().getProfile(callback);
	}

	setRedirectToBusinessProfile() {
		if (this._isMounted)
		{
			this.setState({
				fromProfile: false,
				showUserProfileForBusiness: false
			})
		}
	}

	setRedirectToUserProfileForBusiness() {
		if (this._isMounted)
		{
			this.setState({
				fromProfile: true,
				showUserProfileForBusiness: true
			})
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		return (
			<>
				{this.state.loading && <LoadingComponent/>}
				{!this.state.loading && <ProfilePageRenderer
					showUserProfileForBusiness={this.state.showUserProfileForBusiness}
					fromProfile={this.state.fromProfile}
					isBusiness={this.state.isBusiness}
					setRedirectToBusinessProfile={this.setRedirectToBusinessProfile}
					setRedirectToUserProfileForBusiness={this.setRedirectToUserProfileForBusiness}
					description={this.state.description}
					paypal={this.state.paypal}
				/>}
			</>
		)
	}
}
