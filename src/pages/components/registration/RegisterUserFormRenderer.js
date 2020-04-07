import React from "react";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import FormInputGroup from "../form/FormInputGroup";
import PrivacyPolicyCheckBox from "../form/PrivacyPolicyCheckBox";
import * as PropTypes from "prop-types";

const RegisterUserFormRenderer = (props) => {
	const initialValues = {name: "", email: "", password: "", passwordConfirm: "", terms: false}
	return (
		<Formik history={props.history}
				validationSchema={props.validationSchema}
				initialValues={initialValues}
				onSubmit={props.onSubmit}>
			{({
				  handleSubmit,
				  handleChange,
				  handleBlur,
				  values,
				  touched,
				  errors
			  }) => (
				<Form noValidate
					  history={props.history}
					  onSubmit={handleSubmit.bind(this)}>
					<FormInputGroup
						controlId={"formRegisterName"}
						id={"registerNameGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/name.svg"}
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"text"}
						name={"name"}
						placeholder={"Dein Name"}
						className={"nameUser loginForm" + (props.registerError && "is-invalid")}
						isValid={!!(touched.name && !errors.name)}
						isInvalid={!!(touched.name && !!errors.name)}
						feedback={errors.name}/>
					<FormInputGroup
						controlId={"formRegisterEmail"}
						id={"registerEmailGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-mail.svg"}
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"email"}
						name={"email"}
						placeholder={"Deine E-Mail-Adresse"}
						className={"emailUser loginForm" + (props.registerError && "is-invalid")}
						isValid={!!(touched.email && !errors.email)}
						isInvalid={!!(touched.email && !!errors.email)}
						feedback={errors.email}/>
					<FormInputGroup
						controlId={"formRegisterPassword"}
						id={"registerPasswordGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-passwort.svg"}
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"password"}
						name={"password"}
						placeholder={"Dein Passwort"}
						className={"passwordUser loginForm" + (props.registerError && "is-invalid")}
						isValid={!!(touched.password && !errors.password)}
						isInvalid={!!(touched.password && !!errors.password)}
						feedback={errors.password}/>
					<FormInputGroup
						controlId={"formRegisterPasswordConfirmation"}
						id={"registerPasswordConfirmationGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/icons-passwort.svg"}
						value={values.passwordConfirm}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"password"}
						name={"passwordConfirm"}
						placeholder={"Passwort bestätigen"}
						className={"passwordUser loginForm" + (props.registerError && "is-invalid")}
						isValid={!!(touched.passwordConfirm && !errors.passwordConfirm)}
						isInvalid={!!(touched.passwordConfirm && !!errors.passwordConfirm)}
						feedback={errors.passwordConfirm}/>
					<PrivacyPolicyCheckBox
						touched={touched}
						errors={errors}
						handleChange={handleChange}
						handleFocus={props.onFocus}
						registerError={props.registerError}
					/>
					{props.errorMessage && <div className="feedback">{props.errorMessage}</div>}
					<Button className="loginFormButton"
							type="submit"
							value="Submit">
						Registrieren
					</Button>
				</Form>
			)}
		</Formik>
	)
}

RegisterUserFormRenderer.propTypes = {
	validationSchema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	registerError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default withRouter(RegisterUserFormRenderer);
