import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../../css/general/general-styles.css';
import '../../../css/profile/userProfileSettings.css';


export default class EditUserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFileSelected: false,
            selectedFile: null,
            userName: null,
        }
    }

    handleChange = () => {
        console.log("change");
        
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

    fileUploadHandler = () => {

    };


    render() {
        return (
            <div className="editUser">
                <Form className="inputForm">
                    <Form.Row>
                        <Form.Group className="userPictureForm">
                            <Form.Label className="label">Dein Profilfoto</Form.Label>
                            <div className="userPictureRow">
                                <img src={!this.state.isFileSelected ? "/assets/icons/profilbild-profilbild-gelb.svg" : URL.createObjectURL(this.state.selectedFile)}
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
                                placeholder="Johannes"
                                type="text"
                                className="form-control"
                                name="lokalName"
                                formNoValidate
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Button className="loginFormButton"
                        type="submit"
                        value="Submit">
                    BESTÄTIGEN
                </Button>
            </div>
        );
    }
}
