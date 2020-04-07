import React from "react";
import {Prompt} from 'react-router'
import * as PropTypes from 'prop-types';

/**
 * Stateless component blocking user from leaving an open voice chat
 * asking for their confirmation.
 */
const ChatLeavePrompt = (props) => {
	const promptMessage = props.myName + ", willst du den Chat wirklich verlassen?";
	return <Prompt message={promptMessage} when={true}/>
}

ChatLeavePrompt.propTypes = {
	/** The name of the current user. */
	myName: PropTypes.string.isRequired
}

export default ChatLeavePrompt
