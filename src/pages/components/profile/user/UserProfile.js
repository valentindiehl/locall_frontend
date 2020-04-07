import React from 'react';
import PasswordChangeFormContainer from "../password/PasswordChangeFormContainer";

import '../../../css/settings/setting-form.css';

const UserProfile = () => {
	return (
		<div className="settings-container">

			<div className="box-heading">
				<img className="iconProfile"
					 src={"/assets/icons/edit.png"}
					 alt={"Edit-Icon"}/>
				<h4>Kontodaten bearbeiten</h4>
			</div>

			<div className="white-box">
				<div className="profileForm">
					<div className="inputForm">
						<PasswordChangeFormContainer/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default UserProfile;
