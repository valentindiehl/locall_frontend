import React from "react";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import FormInputGroup from "../../form/FormInputGroup";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import * as PropTypes from "prop-types";

const PasswordChangeFormRenderer = (props) => {
	return (
		<Formik history={props.history}
				validationSchema={props.validationSchema}
				initialValues={{oldPassword: "", password: "", passwordConfirm: ""}}
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
						controlId={"formBasicPassword"}
						id={"resetPasswordOld"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-passwort.svg"}
						value={values.oldPassword}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"password"}
						name={"oldPassword"}
						placeholder={"Dein bisheriges Passwort"}
						className={"passwordUser loginForm" + (props.passwordChangeError && "is-invalid")}
						isValid={false} // We do not want to imply the user typed their correct password
						isInvalid={!!(touched.oldPassword && !!errors.oldPassword)}
						feedback={errors.oldPassword}
					/>
					<FormInputGroup
						controlId={"formNewPassword"}
						id={"resetPasswordNew"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-passwort.svg"}
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"password"}
						name={"password"}
						placeholder={"Dein neues Passwort"}
						className={"passwordUser loginForm" + (props.passwordChangeError && "is-invalid")}
						isValid={!!(touched.password && !errors.password)}
						isInvalid={!!(touched.password && !!errors.password)}
						feedback={errors.password}
					/>
					<FormInputGroup
						controlId={"formNewPasswordConfirm"}
						id={"resetPasswordNewConfirm"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-passwort.svg"}
						value={values.passwordConfirm}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"password"}
						name={"passwordConfirm"}
						placeholder={"Bestätige dein neues Passwort"}
						className={"passwordUser loginForm" + (props.passwordChangeError && "is-invalid")}
						isValid={!!(touched.passwordConfirm && !errors.passwordConfirm)}
						isInvalid={!!(touched.passwordConfirm && !!errors.passwordConfirm)}
						feedback={errors.passwordConfirm}
					/>
					{props.errorMessage && <div className="feedback">{props.errorMessage}</div>}
					<Button className="loginFormButton"
							type="submit"
							value="Submit">
						Bestätigen
					</Button>
				</Form>
			)}
		</Formik>
	)
}

PasswordChangeFormRenderer.propTypes = {
	validationSchema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	passwordChangeError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default withRouter(PasswordChangeFormRenderer);
