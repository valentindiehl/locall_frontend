import React from "react";

import '../../css/general/general-styles.css';
import '../../css/partners/partnerTile.css';
import * as PropTypes from "prop-types";

const PartnerTile = (props) => {
	const imageStyle = !!props.business.image_url && {backgroundImage: "url(" + '/assets/images/businesses/' + props.business._id + ".jpg)"}
	return (
		<a href={props.business.url} target={"_blank"}>
			<div className={"partnerTile" + (props.className ? " " + props.className : "")}>
				<div className={"partnerLogo"} style={imageStyle}/>
				<div className="partnerDetails">
					<p className="partnerName">{props.business.name}</p>
					{!!props.business.city && <p className="partnerLocation">{props.business.city}</p>}
				</div>
			</div>
		</a>
	);
};

PartnerTile.propTypes = {
	business: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image_url: PropTypes.string,
		url: PropTypes.string,
		city: PropTypes.string
	}),
	className: PropTypes.string
}

export default PartnerTile
