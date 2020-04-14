import React from "react";
import * as PropTypes from "prop-types";

import '../../css/general/general-styles.css';
import '../../css/about/aboutTile.css';

const AboutTile = (props) => {
	const imageStyle = props.person.image && {backgroundImage: "url(" + props.person.image + ")"}
	return (
		<div className="aboutTile">
			<div className={"userPortrait"} style={imageStyle}/>
			<div className="userDetails">
				<p className="userName">{props.person.name}</p>
				<p className="userRole">{props.person.roles.join(" & ")}</p>
			</div>
		</div>
	);
}

AboutTile.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		roles: PropTypes.array.isRequired
	})
}

export default AboutTile;
