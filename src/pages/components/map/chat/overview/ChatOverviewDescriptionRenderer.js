import React from "react";
import * as PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Renders the description content of the chat overview panel.
 */
const ChatOverviewDescriptionRenderer = (props) => {
	return (
		<div>
			<h1>
				Voice Chat&nbsp;
				<OverlayTrigger
					key={'top'}
					placement={'top'}
					overlay={<Tooltip className="verificationToolTip" id={"versionTooltip"}>Dieses Feature ist noch in
						der frühen Entwicklung.
						Es kann daher Fehler beinhalten, sowie auf einigen Browsern/Endgeräten nicht
						funktioneren.</Tooltip>}>
					<span
						className={'version'}>
					Alpha
				</span>
				</OverlayTrigger>{' '}
			</h1>
			<h6>{props.name}</h6>
		</div>
	)
}

ChatOverviewDescriptionRenderer.propTypes = {
	/** Text that should be rendered as description heading. */
	name: PropTypes.string
}


export default ChatOverviewDescriptionRenderer;
