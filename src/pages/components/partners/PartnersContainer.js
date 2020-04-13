import React from "react";
import Container from "react-bootstrap/Container";

import '../../css/general/general-styles.css';
import '../../css/partners/partnersContainer.css';
import PartnerTile from "./PartnerTile";

export default class PartnersContainer extends React.Component {
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
            <div className="Fade">
                <Container className="contentContainer partners">
                    <h3>Unsere Partner</h3>
                    <p>Einige Cafés, Restaurants und Bars arbeiten bereits mit uns zusammen. Unser größtes Anliegen ist
                        es, unser Netzwerk immer weiter zu vergrößern, um möglichst viele Gastronomien in dieser
                        schwierigen Phase zu unterstützen. Du besitzt selbst ein Lokal und möchtest LOCALL beitreten?
                        Dann registriere dich hier.</p>
                    <div className="partnersGrid">
                        <PartnerTile></PartnerTile>
                        <PartnerTile></PartnerTile>
                        <PartnerTile></PartnerTile>
                        <PartnerTile></PartnerTile>
                    </div>
                </Container>
            </div>
        );
    }
}
