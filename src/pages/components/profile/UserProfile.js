import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import PasswordChangeForm from "./PasswordChangeForm";
import EditUserProfileContainer from "./EditUserProfileContainer";

import '../../css/settings/general-styles.css';
import '../../css/settings/setting-form.css';
import '../../css/settings/userProfileSettings.css';


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="settings-container">

                <div className="box-heading">
                    <img className="iconProfile"
                         src={"/assets/icons/edit.png"}
                         alt={"Edit-Icon"}/>
                    <h4>Profil bearbeiten</h4>
                </div>


                <div className="white-box editUser">
                    <div className="profileForm">
                        <div className="inputForm">
                            <EditUserProfileContainer token={this.props.token} history={this.props.history}/>
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
                            <PasswordChangeForm isPasswordChange={true} token={this.props.token} history={this.props.history}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}