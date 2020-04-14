import React from "react";

import '../../css/general/general-styles.css';
import '../../css/partners/partnerTile.css';

export default class PartnerTile extends React.Component {

    render() {
        return (
            <div className="partnerTile">
                <div className={"partnerLogo"}>
                    <img src={""}/>
                </div>
                <div className="partnerDetails">
                    <p className="partnerName">Name Lokal</p>
                    <p className="partnerLocation">München</p>
                </div>
            </div>
        );
    }
}
