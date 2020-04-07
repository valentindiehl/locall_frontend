import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import React from "react";
import * as PropTypes from 'prop-types';

const FormInputGroup = (props) => {
	return (
		<Form.Group controlId={props.controlId} id={props.id}>
			<InputGroup>
				<InputGroup.Prepend>
					<Image
						className={props.imageClassName}
						src={props.imageSrc} id={props.id + "Icon"}/>
				</InputGroup.Prepend>
				<Form.Control required={!props.notRequired}
							  value={props.value}
							  onChange={props.onChange}
							  onBlur={props.onBlur}
							  onFocus={props.onFocus}
							  type={props.type}
							  name={props.name}
							  placeholder={props.placeholder}
							  className={props.className}
							  isValid={props.isValid}
							  isInvalid={props.isInvalid}/>
				<Form.Control.Feedback type="invalid">{props.feedback}</Form.Control.Feedback>
			</InputGroup>
		</Form.Group>
	)
}

FormInputGroup.propTypes = {
	controlId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	imageClassName: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	isValid: PropTypes.bool.isRequired,
	isInvalid: PropTypes.bool.isRequired,
	feedback: PropTypes.string,
	notRequired: PropTypes.bool
}

export default FormInputGroup;
