import React from "react";
import Spinner from "react-bootstrap/Spinner";

/**
 * Stateless component rendering a loading spinner
 */
const LoadingComponent = () => {
	return (
		<div className="loadingSpinner">
			<Spinner size="lg" animation="grow"/>
		</div>
	)
}

export default LoadingComponent;
