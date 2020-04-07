import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import UserProfile from "./UserProfile";
import SupportContainer from "../support/SupportContainer";

const UserProfileContainer = () => {
	return (
		<div className="Fade">
			<Col sm={6}>
				<Container className="settings">
					<h3>Profileinstellungen</h3>
					<UserProfile/>
					<SupportContainer/>
				</Container>
			</Col>
		</div>
	);
}

export default UserProfileContainer
