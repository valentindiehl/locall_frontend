import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {we} from "./data/we";
import '../../css/general/general-styles.css';
import '../../css/about/aboutContainer.css';
import AboutTile from "./AboutTile";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

export default class AboutContainer extends Component {

	constructor(props) {
		super(props);
		this.renderUs = this.renderUs.bind(this);
	}

	renderUs() {
		return we.map((person, index) => {
			return <AboutTile person={person} key={index}/>
		})
	}

	render() {
		return (
			<div className="Fade">
				<Container className="contentContainer about">
					<h3>Über uns</h3>
					<Row className={"aboutWirVsVirus"}>
						<Col md={6}>
							<p>
							Alles begann mit dem <strong>Hackathon #wirvsvirus</strong>, der vom 20. bis 22.
							März <strong>von der Bundesregierung</strong> ausgerufen wurde. In einem 10-köpfigen Team stellten wir uns folgender Herausforderung: Wie
							können wir innerhalb von nur 48 Stunden von Grund auf ein Projekt auf die Beine stellen, das
							die
							soziale Isolierung, sowie die Existenzbedrohung lokaler Gastronomien verbessert? Entstanden
							ist
							die Plattform <strong>LOCALL</strong>, an der wir seitdem stetig weiter gearbeitet haben.
							Anfang April haben wir
							uns mit dem Projekt <strong>WeLL – We Love Local</strong> zusammengeschlossen und arbeiten
							seitdem gemeinsam an
								unserem Ziel!</p>
						</Col>
						<Col md={6}>
							<a href={"https://wirvsvirushackathon.org/"} target={"_blank"}>
								<img alt={"WirVsVirus"} src={"/assets/images/wirvsvirusprojekt.png"}/>
							</a>
						</Col>
					</Row>
					<Row className={"aboutTeamRow"}>
						<Col md={12}>
							<p>Unser Team ist bunt zusammengewürfelt aus den unterschiedlichsten Bereichen, aus ganz
							Deutschland,
							und wächst immer weiter!
							Du möchtest uns unterstützen und unser Team ergänzen? Dann melde dich unter
								kontakt@locall-map.de. Wir freuen uns über jede Unterstützung!</p>
						</Col>
					</Row>
					<div className="aboutGrid">
						{this.renderUs()}
					</div>
				</Container>
			</div>
		);
	}
}
