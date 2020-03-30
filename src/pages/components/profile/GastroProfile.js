import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import PasswordChange from "./PasswordChange";
import Button from "react-bootstrap/Button";
import GastroForm from "./GastroForm";


export default class GastroProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="settings-container">
                <div className="box-heading">
                    <img className="iconProfile" src={"/assets/icons/edit.png"} alt={"Edit-Icon"}/>
                    <h4> Lokalinformationen bearbeiten</h4>
                </div>
                <div className="white-box">
                    <GastroForm paypal={this.props.paypal} description={this.props.description}/>
                </div>
            </div>
        );
    }
}