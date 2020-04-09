import React from "react";
import ApiHelper from "../helpers/api-helper";
import ProfilePageRenderer from "./components/profile/ProfilePageRenderer";
import LoadingComponent from "./components/LoadingComponent";

import './css/profile/profile.css';
import './css/general/general-styles.css';
import './css/general/form-styles.css';
import './css/profile/profile-forms.css';
import {deselectBusiness, fetchBusinesses, selectBusiness} from "../redux/actions/businessActions";
import { connect } from 'react-redux';
import {fetchProfile} from "../redux/actions/userActions";

function mapStateToProps(state) {
	return {
		fetching: state.user.userFetching,
		fetched: state.user.userFetched,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchProfile: () => dispatch(fetchProfile())
	}
};


class ProfilePage extends React.Component {

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
			paypal: "",
			userData: {},
		};
		this.setRedirectToUserProfileForBusiness = this.setRedirectToUserProfileForBusiness.bind(this);
		this.setRedirectToBusinessProfile = this.setRedirectToBusinessProfile.bind(this);
	}

	componentDidMount() {
		this._isMounted = true;
		const callback = (result) => {
			console.log(result);
			if (this._isMounted) {
				if (!!result.business) {
					this.setState({
						isBusiness: true,
						showBusiness: true,
						isLoading: false,
						userData: result.account,
						businessId: result.business.id,
						description: result.business.message,
						paypal: result.business.paypal
					});
				} else {
					this.setState({
						isBusiness: false,
						showBusiness: false,
						isLoading: false,
						userData: result.account,
					})
				}
			}
		};
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
				{this.props.fetching && <LoadingComponent/>}
				{!this.state.fetching && <ProfilePageRenderer
					userData={this.state.userData}
					showUserProfileForBusiness={this.state.showUserProfileForBusiness}
					fromProfile={this.state.fromProfile}
					isBusiness={this.state.isBusiness}
					avatarUrl={this.state.avatarUrl}
					setRedirectToBusinessProfile={this.setRedirectToBusinessProfile}
					setRedirectToUserProfileForBusiness={this.setRedirectToUserProfileForBusiness}
					description={this.state.description}
					paypal={this.state.paypal}
				/>}
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
