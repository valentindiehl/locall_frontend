import React from 'react';

const ChatTableDescriptionRenderer = (props) => {
	return (
		<div>
			<p className={"describer"}>Dein Tisch</p>
			<h1>{props.prefixName}<span style={{fontWeight: "900"}}>tisch</span></h1>
		</div>
	)
}

export default ChatTableDescriptionRenderer;
