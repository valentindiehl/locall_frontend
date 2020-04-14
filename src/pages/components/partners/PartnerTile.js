import React from "react";

import '../../css/general/general-styles.css';
import '../../css/partners/partnerTile.css';
import * as PropTypes from "prop-types";

const PartnerTile = (props) => {
	const imageStyle = props.business.image_url && {backgroundImage: "url(" + props.business.image_url + ")"}
	return (
		<a href={props.business.url} target={"_blank"}>
			<div className="partnerTile">
				<div className={"partnerLogo"} style={imageStyle}/>
				<div className="partnerDetails">
					<p className="partnerName">{props.business.name}</p>
					{/*<p className="partnerLocation">TODO</p>*/}
				</div>
			</div>
		</a>
	);
}

PartnerTile.propTypes = {
	business: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image_url: PropTypes.string,
		url: PropTypes.string
	})
}

export default PartnerTile
