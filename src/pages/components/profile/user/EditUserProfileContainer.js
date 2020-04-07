import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../../css/general/general-styles.css';
import '../../../css/settings/userProfileSettings.css';


export default class EditUserProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    handleChange = () => {
        console.log("change");
    };

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
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
                                <img src="/assets/icons/profilbild-profilbild-gelb.svg"
                                     className="userPicture"/>

                                <div className="file-input-wrapper">
                                    <button className="btn-file-input">LADE DEIN BILD HOCH</button>
                                    <input type="file" name="file" onChange={this.fileSelectedHandler}/>
                                </div>

                            </div>

                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="userName">
                            <Form.Label className="label">Dein Nutzername</Form.Label>
                            <input
                                value="Johannes"
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
