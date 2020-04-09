import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ApiHelper from '../../../../helpers/api-helper';

import '../../../css/general/general-styles.css';
import '../../../css/profile/userProfileSettings.css';


export default class EditUserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFileSelected: false,
            selectedFile: null,
            userName: "",
        }
    }

    handleChange = (event) => {
        console.log("change");
        if (event.target.name === "userName") this.setState({
            userName: event.target.value,
        })
    };

    preventPopup = event => {
        if (this.state.isFileSelected)
        {
            event.preventDefault();
            this.fileSelectedHandler(null);
        }
    }

    fileSelectedHandler = event => {
        if (!this.state.isFileSelected)
        {
            this.setState({
                isFileSelected: true,
                selectedFile: event.target.files[0],
            });
            console.log(event.target.files[0])
        } else {
            this.setState({
                isFileSelected: false,
                selectedFile: null
            })
        }

    };

    componentDidMount() {
        this.setState({
            userName: this.props.userData.name,
        })
    }

    onSuccess(data) {
        console.log(data);
        window.location.reload();
    }

    onError(error) {
        console.log(error);
    }

    fileUploadHandler = () => {
        console.log("ITS TIIIIIIME");
        let data = new FormData();
        if (this.state.userName !== "") data.append('name', this.state.userName);
        if (this.state.selectedFile) data.append('avatar', this.state.selectedFile);

        ApiHelper().changeUserData(data, this.onSuccess, this.onError);

    };

    getAvatarUrl = () => {
        return this.props.userData.avatarUrl ? this.props.userData.avatarUrl : "/assets/icons/profilbild-profilbild-gelb.svg";
    }


    render() {
        return (
            <div className="editUser">
                <Form className="inputForm" onSubmit={this.fileUploadHandler}>
                    <Form.Row>
                        <Form.Group className="userPictureForm">
                            <Form.Label className="label">Dein Profilfoto</Form.Label>
                            <div className="userPictureRow">
                                <img src={!this.state.isFileSelected ? this.getAvatarUrl() : URL.createObjectURL(this.state.selectedFile)}
                                     className="userPicture"/>

                                <div className="file-input-wrapper">
                                    <button className="btn-file-input">{ !this.state.isFileSelected ? "LADE DEIN BILD HOCH" : "BILD ENTFERNEN" } </button>
                                    <input type="file" name="file" onClick={this.preventPopup} onChange={this.fileSelectedHandler}/>
                                </div>

                            </div>

                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="userName">
                            <Form.Label className="label">Dein Nutzername</Form.Label>
                            <input
                                value={this.state.userName}
                                type="text"
                                className="form-control"
                                name="userName"
                                id="userName"
                                formNoValidate
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Button className="loginFormButton"
                        type="submit"
                        value="Submit"
                        onClick={this.fileUploadHandler}>
                    BESTÄTIGEN
                </Button>
            </div>
        );
    }
}
