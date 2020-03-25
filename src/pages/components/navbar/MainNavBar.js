import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import ProgressBarContainer from "./ProgressBarContainer";
import NotificationContainer from "./NotificationContainer";

import '../../css/navbar/mainNavBar.css';

export default class MainNavBar extends Component {
    render() {
        return <Navbar>
            <Navbar.Brand href="#home" className="brandImage">
                <img
                    src="/assets/icons/logo-locall.svg"
                    width="170px"
                    height="auto"
                    className="d-inline-block align-center"
                    alt="Locall Logo"
                />
            </Navbar.Brand>
            <ProgressBarContainer/>
            <NotificationContainer/>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand href="/login" className="profileImage">
                    <img
                        src="/assets/icons/valle.svg"
                        width="54px"
                        height="54px"
                        className="d-inline-block align-center rounded-circle"
                        alt="Locall Logo"
                    />
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>;
    }
}
