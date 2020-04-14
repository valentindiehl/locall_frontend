import React from "react";
import Container from "react-bootstrap/Container";

import '../../css/general/general-styles.css';
import '../../css/about/aboutContainer.css';
import AboutTile from "./AboutTile";

export default class AboutContainer extends React.Component {
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
                <Container className="contentContainer about">
                    <h3>Über uns</h3>
                    <p>Alles begann mit dem Hackathon #wirvsvirus, der vom 20. bis 22. März von der Bundesregierung
                        ausgerufen wurde. In einem 10-köpfigen Team stellten wir uns folgender Herausforderung: Wie
                        können wir innerhalb von nur 48 Stunden von Grund auf ein Projekt auf die Beine stellen, das die
                        soziale Isolierung, sowie die Existenzbedrohung lokaler Gastronomien verbessert? Entstanden ist
                        die Plattform locall, an der wir seitdem stetig weiter gearbeitet haben.
                        <br></br><br></br>
                        Unser Team ist zusammengewürfelt aus den unterschiedlichsten Bereichen und wächst immer weiter!
                        Du möchtest uns unterstützen und unser Team ergänzen? Dann melde dich unter
                        kontakt@locall-map.de. Wir freuen uns über jede Unterstützung!</p>
                    <div className="aboutGrid">
                        <AboutTile></AboutTile>
                        <AboutTile></AboutTile>
                        <AboutTile></AboutTile>
                        <AboutTile></AboutTile>
                    </div>
                </Container>
            </div>
        );
    }
}
