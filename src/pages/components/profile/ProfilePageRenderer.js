import React, { useEffect } from "react";
import GastroProfileContainer from "./gastro/GastroProfileContainer";
import UserProfileContainer from "./user/UserProfileContainer";
import Row from "react-bootstrap/Row";
import ActionContainerLeft from "./action/ActionContainerLeft";
import ActionContainerRight from "./action/ActionContainerRight";
import {withRouter} from "react-router-dom";
import * as PropTypes from "prop-types";

import '../../css/general/general-styles.css';
import '../../css/form/form.css';
import Container from "react-bootstrap/Container";


const ProfilePageRenderer = (props) => {

	console.log(props);

	useEffect(() => {
		console.log("Mounted");
	})

	return (
		<div className="Fade">
			<Container fluid>
				<Row>
					<ActionContainerLeft fromProfile={props.fromProfile}
										 setRedirectToBusinessProfile={props.setRedirectToBusinessProfile}/>
					{props.isBusiness && !props.fromProfile
					&& <ActionContainerRight
						setRedirectToUserProfileForBusiness={props.setRedirectToUserProfileForBusiness}/>}
				</Row>
			</Container>
			<Container>
				{props.isBusiness && !props.showUserProfileForBusiness &&
				<GastroProfileContainer paypal={props.paypal} description={props.description}/>}

				{(props.showUserProfileForBusiness || !props.isBusiness) &&
				<UserProfileContainer userData={props.userData}/>}
			</Container>
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
