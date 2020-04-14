import React from 'react';
import UserProfile from "./UserProfile";

const UserProfileContainer = (props) => {
	return (<div className={"contentContainer"}>
		<h3>Profileinstellungen</h3>
		<UserProfile userData={props.userData}/>
	</div>);
}

export default UserProfileContainer
