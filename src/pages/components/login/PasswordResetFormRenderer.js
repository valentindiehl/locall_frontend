import React from "react";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import FormInputGroup from "../form/FormInputGroup";
import * as PropTypes from "prop-types";

const PasswordResetFormRenderer = (props) => {
	return (
		<>
			<Formik history={props.history}
					validationSchema={props.validationSchema}
					initialValues={{email: ""}}
					onSubmit={props.onSubmit}>
				{({
					  handleSubmit,
					  handleChange,
					  handleBlur,
					  values,
					  touched,
					  errors,
				  }) => (
					<Form noValidate
						  history={props.history}
						  onSubmit={handleSubmit.bind(this)}>
						<FormInputGroup
							controlId={"formBasicEmail"}
							id={"emailGroup"}
							imageClassName={"loginIcon"}
							imageSrc={"/assets/icons/icons-mail.svg"}
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={props.handleFocus}
							type={"email"}
							name={"email"}
							placeholder={"Deine E-Mail-Adresse"}
							className={"emailUser loginForm" + (props.resetError && "isInvalid")}
							isValid={false} // we do not want to show valid to not falsely imply a correct email
							isInvalid={!!(touched.email && !!errors.email)}
							feedback={errors.email}
						/>
						{props.errorMessage && <div className="invalid-feedback">{props.errorMessage}</div>}
						<Button className="loginFormButton" type="submit" value="Submit">
							Zurücksetzen
						</Button>
					</Form>
				)}
			</Formik>
		</>
	)
}

PasswordResetFormRenderer.propTypes = {
	validationSchema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	resetError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default withRouter(PasswordResetFormRenderer);
