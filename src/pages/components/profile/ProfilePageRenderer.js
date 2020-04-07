import React from "react";
import GastroProfileContainer from "./gastro/GastroProfileContainer";
import UserProfileContainer from "./user/UserProfileContainer";
import NavBarContainer from "../navbar/NavBarContainer";
import Row from "react-bootstrap/Row";
import ActionContainerLeft from "./action/ActionContainerLeft";
import ActionContainerRight from "./action/ActionContainerRight";
import FooterContainer from "../footer/FooterContainer";
import {withRouter} from "react-router-dom";
import * as PropTypes from "prop-types";

import '../../css/settings/general-styles.css';
import '../../css/form/form.css';

const ProfilePageRenderer = (props) => {
	return (
		<div className="Fade">
			<NavBarContainer history={props.history}
							 navbar={{isLoggedIn: true}}/>
			<Row>
				<ActionContainerLeft fromProfile={props.fromProfile}
									 setRedirectToBusinessProfile={props.setRedirectToBusinessProfile}/>

				{props.isBusiness && !props.showUserProfileForBusiness &&
				<GastroProfileContainer paypal={props.paypal} description={props.description}/>}

				{(props.showUserProfileForBusiness || !props.isBusiness) && <UserProfileContainer/>}

				{props.isBusiness && !props.fromProfile
				&& <ActionContainerRight
					setRedirectToUserProfileForBusiness={props.setRedirectToUserProfileForBusiness}/>}
			</Row>
			<FooterContainer isLoggedIn={true}/>
		</div>
	)
}

ProfilePageRenderer.propTypes = {
	fromProfile: PropTypes.bool.isRequired,
	isBusiness: PropTypes.bool.isRequired,
	showUserProfileForBusiness: PropTypes.bool.isRequired,
	setRedirectToBusinessProfile: PropTypes.func.isRequired,
	setRedirectToUserProfileForBusiness: PropTypes.func.isRequired,
	description: PropTypes.string,
	paypal: PropTypes.string
}
export default withRouter(ProfilePageRenderer);
