import React from "react";

const ForgotPasswordRenderer = (props) => {
	return (
		<div className="passwordLost" onClick={props.onClick}>
			<p>{props.text}</p>
		</div>
	)
}

export default ForgotPasswordRenderer;
