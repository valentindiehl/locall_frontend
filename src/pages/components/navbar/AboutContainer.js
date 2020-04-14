import React from "react";
import {Nav} from "react-bootstrap";

const AboutContainer = (props) => {
	return (
		<>
			<Nav.Link className={"navLink"} href={"/about"}>Über Uns</Nav.Link>
			<Nav.Link className={"navLink"} href={"/partners"}>Partner</Nav.Link>
		</>
	)
}

export default AboutContainer
