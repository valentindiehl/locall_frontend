import React from "react";
import '../../../../../../css/chat/streamContainer.css';
import PropTypes from 'prop-types';

/**
 * Stateless component responsible for rendering the different media stream
 * objects of all participants.
 */
const ChatStreamRenderer = (props) => {
	return (
		props.videoIds.map((id) => {
			return (
				<video
					id={id}
					key={id}
					autoPlay
					playsInline
					className='remoteStream'
				/>
			)
		}));
}

ChatStreamRenderer.propTypes = {
	/** Includes the ids of the video elements to be rendered. */
	videoIds: PropTypes.array.isRequired
}
export default ChatStreamRenderer;
