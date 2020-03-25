import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../../css/landingpage/infoContainer.css';


export default class InfoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container className="infoContainer">
				<Row className="coronaRow">
					<Col className="coronaText" md={6}>
						<h4>Die Auswirkungen von Covid-19</h4>
						<p>Durch die Corona-Krise erfahren kleine <b>Gastronomien und Unternehmen</b> eine
							Negativspirale
							aus
							<b>Zahlungsausfällen, Kündigungen, steigenden Kostenbelastungen und letztlich
								Insolvenzen</b>.
							Aufgrund der <b>Ausgangsbeschränkung</b> können ihre Kundinnen und Kunden sie nicht mehr
							unterstützen.</p><p> Auf der anderen Seite leidet ein Großteil der Bevölkerung aufgrund von
						<b>Social Distancing</b> unter dem <b>fehlenden Kontakt</b> mit seinen Mitmenschen. </p>
						<p>Eine Plattform ist notwendig, die Bürgerinnen und Bürger in Krisenzeiten zusammenkommen
							lässt, indem sie weiterhin ihr Lieblingslokal virtuell besuchen und durch Spenden finanziell
							unterstützen können.Eine <b>Plattform</b> ist notwendig, in denen die Bürgerinnen und Bürger
							weiterhin
							ihr Lieblingscafé/-restaurant oder ihre Lieblingsbar virtuell besuchen können mit der
							Kombination aus finanzieller <b>Unterstützung</b> durch Spenden.</p>

					</Col>
					<Col className="coronaImage" md={6}>
						<img src="/assets/images/laden.png" alt={"Illustration mit Luftballons"}/>
					</Col>
				</Row>
				<Row className="solutionRow">
					<Col className="solutionImage" md={6}>
						<img src="/assets/images/laden2.png" alt={"Illustration mit Luftballons"}/>
					</Col>
					<Col className="solutionText" md={6}>
						<Container>
							<h4>Unser Lösungsansatz</h4>
							<p>Triff dich virtuell in deinem Lieblingscafé, unterhalte dich über <b>Voice-Chat</b> mit
								deinen Freundinnen und Freunden oder lerne neue Leute bei Tischspielen kennen. Ob du
								dich mit deinen Freunden an einen privaten Tisch (private Channels) setzt oder neue
								Bekanntschaften an offenen Tischen (offene Channels) machst, bleibt dir überlassen.</p>
							<p> Das Lokal deiner Wahl kannst du dann durch den <b>Kauf von digitalen Drinks oder
								Mahlzeiten unterstützen</b>. Du suchst zwischen drei Produkten aus und überweist dadurch
								den ausgegebenen Betrag dem jeweiligen Lokal. So sammelst du SocialPoints, womit du nach
								Zeiten des Social Distancing einen echten Gratis-Kaffee/Drink in deiner
								Lieblingslokalität mit deinen Freunden oder neuen Bekannten genießen kannst.</p>
						</Container>
					</Col>
				</Row>
			</Container>
		);
	}
}
