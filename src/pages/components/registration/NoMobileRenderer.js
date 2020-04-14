import React from "react";
import {Container} from "react-bootstrap";

const NoMobileRenderer = () => {
	return (
		<Container style={{marginTop: 100}}>
			<h4>Du möchtest mitmachen?</h4>
			<p>Leider ist unsere Kartenansicht im Moment nur auf dem Desktop benutzbar. Setz dich doch einfach schnell
				an deinen Laptop oder PC und melde dich dort an. In der Zwischenzeit arbeiten wir natürlich auf
				Hochtouren an einer mobilen Version.<br/> Danke für deine Geduld!
				<span role="img" aria-label="yellow-heart">💛</span><br/><br/>
			</p>
		</Container>
	)
}

export default NoMobileRenderer;
