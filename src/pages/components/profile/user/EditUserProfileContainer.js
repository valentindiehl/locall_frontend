import React from 'react';

import '../../../css/general/general-styles.css';
import '../../../css/profile/userProfileSettings.css';
import EditUserProfileFormComponent from "./EditUserProfileFormComponent";

const EditUserProfileContainer = (props) => {
	return (
		<div className="editUser">
			<EditUserProfileFormComponent userData={props.userData}/>
		</div>
	);
}

export default EditUserProfileContainer;
