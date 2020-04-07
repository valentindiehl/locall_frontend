import React from "react";

const RegisterSuccessRenderer = () => {
	return (
		<>
			<h4 className="registeredThanks">DANKE,</h4>
			<p className="registeredMessage">dass du dich bei uns registriert hast
				<span role="img" aria-label="yellow-heart">💛</span>.<br/>
				Wir haben dir eine Email mit allen weiteren Infos geschickt und freuen uns schon auf dich!
			</p>
		</>
	)
}

export default RegisterSuccessRenderer
