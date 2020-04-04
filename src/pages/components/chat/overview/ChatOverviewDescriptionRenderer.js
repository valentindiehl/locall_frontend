import React from "react";
import * as PropTypes from "prop-types";

/**
 * Renders the description content of the chat overview panel.
 */
const ChatOverviewDescriptionRenderer = (props) => {
	return (
		<div>
			<h1>
				Voice Chat
				<span
					title={"Dieses Feature ist noch in der frühen Entwicklung. Es kann daher Fehler beinhalten, sowie auf einigen Browsern/Endgeräten nicht funktioneren."}
					className={'version'}>
					Alpha
				</span>
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
