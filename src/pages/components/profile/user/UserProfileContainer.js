import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import UserProfile from "./UserProfile";
import SupportContainer from "../support/SupportContainer";

const UserProfileContainer = (props) => {
	return (
		<div className="Fade">
			<Col sm={6}>
				<Container className="settings contentContainer">
					<h3>Profileinstellungen</h3>
					<UserProfile userData={props.userData}/>
				</Container>
			</Col>
		</div>
	);
}

export default UserProfileContainer
