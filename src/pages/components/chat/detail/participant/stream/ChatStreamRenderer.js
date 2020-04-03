import React from "react";
import '../../../../../css/chat/streamContainer.css';

const ChatStreamRenderer = (props) => {
	return (
		props.videoIds.map((id) => {
			return (
				<video
					id={id}
					key={id}
					autoPlay
					className='remoteStream'
				/>
			)
		}));
}

export default ChatStreamRenderer;
