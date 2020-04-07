import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless component rendering a description of the current table.
 */
const ChatTableDescriptionRenderer = (props) => {
	return (
		<div>
			<p className={"describer"}>Dein Tisch</p>
			<h1>{props.prefixName}<span style={{fontWeight: "900"}}>tisch</span></h1>
		</div>
	)
}

ChatTableDescriptionRenderer.propTypes = {
	/** The prefix name of the given table. */
	prefixName: PropTypes.string.isRequired
}

export default ChatTableDescriptionRenderer;
