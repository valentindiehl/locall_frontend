import React from "react";

import '../../css/general/general-styles.css';
import '../../css/partners/partnersContainer.css';
import Container from "react-bootstrap/Container";
import GastronomyContainer from "./GastronomyContainer";
import HostingContainer from "./HostingContainer";

const PartnersContainer = () => {
	return (
		<div className="Fade">
			<Container className="contentContainer partners">
				<h3>Unsere Partner</h3>
				<GastronomyContainer/>
				<HostingContainer/>
			</Container>
		</div>
	)
}

export default PartnersContainer
