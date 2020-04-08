import React from "react";
import Form from "react-bootstrap/Form";
import * as PropTypes from "prop-types";

const PrivacyPolicyCheckBox = (props) => {
	return (
		<Form.Group className="checkBoxGroup">
			<Form.Check
				required
				name="terms"
				isInvalid={!!(props.touched.terms && !!props.errors.terms)}
				feedback={props.errors.terms}
				onChange={props.handleChange}
				onFocus={props.handleFocus}
				type={"checkbox"}
				id={"datenschutzCheck"}
				className={props.registerError ? "login-form is-invalid" : "login-form"}
				label={<p>Ich habe die <a href={'/privacy-policy'}
										  target="_blank"
										  rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und
					akzeptiere diese.
				</p>}
			/>
		</Form.Group>
	)
}

PrivacyPolicyCheckBox.propTypes = {
	touched: PropTypes.shape({
		terms: PropTypes.bool
	}),
	errors: PropTypes.shape({
		terms: PropTypes.string
	}),
	registerError: PropTypes.bool.isRequired,
	handleFocus: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired
}

export default PrivacyPolicyCheckBox
