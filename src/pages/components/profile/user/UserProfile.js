import React from 'react';
import PasswordChangeFormContainer from "../password/PasswordChangeFormContainer";

import '../../../css/profile/profile-forms.css';
import EditUserProfileContainer from "./EditUserProfileContainer";
import DeleteAccountContainer from "../delete/DeleteAccountContainer";

const UserProfile = (props) => {
	console.log(props);

	return (
		<div>
		{ !!props.userData ?
				<div className="settings-container">

					<div className="box-heading">
						<img className="iconProfile"
							 src={"/assets/icons/edit.png"}
							 alt={"Edit-Icon"}/>
						<h4>Profil bearbeiten</h4>
					</div>

					<div className="white-box">
						<div className="profileForm">
							<div className="inputForm">
								<EditUserProfileContainer userData={props.userData}/>
							</div>
						</div>
					</div>

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

					<div className="box-heading">
						<img className="iconProfile"
							 src={"/assets/icons/logout.svg"}
							 alt={"Delete-Icon"}/>
						<h4>Konto löschen</h4>
					</div>

					<div className="white-box">
						<div className="profileForm">
							<div className="inputForm">
								<DeleteAccountContainer/>
							</div>
						</div>
					</div>
				</div>
				:
				""
		}</div>

	);
}
export default UserProfile;
