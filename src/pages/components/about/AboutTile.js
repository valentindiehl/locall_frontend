import React from "react";

import '../../css/general/general-styles.css';
import '../../css/about/aboutTile.css';

export default class AboutTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                hideLogin: false,
                isLoggedIn: false
            },
        };
    }

    render() {
        return (
            <div className="aboutTile">
                <div className={"userPortrait"}>
                    <img src={""}/>
                </div>
                <div className="userDetails">
                    <p className="userName">Valle</p>
                    <p className="userRole">Projektmanagement &
                        Backend-Entwicklung</p>
                </div>
            </div>
        );
    }
}
