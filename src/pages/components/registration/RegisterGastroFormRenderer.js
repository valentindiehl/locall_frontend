import React from "react";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import FormInputGroup from "../form/FormInputGroup";
import PrivacyPolicyCheckBox from "../form/PrivacyPolicyCheckBox";
import * as PropTypes from "prop-types";

const RegisterGastroFormRenderer = (props) => {
	return (
		<Formik history={props.history}
				validationSchema={props.validationSchema}
				initialValues={{name: "", email: "", terms: false}}
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
						controlId={"formRegisterBusinessName"}
						id={"registerBusinessNameGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/name.svg"}
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"text"}
						name={"name"}
						placeholder={"Name deines Lokals"}
						className={"nameUser loginForm" + (props.registerError && "is-invalid")}
						isValid={!!(touched.name && !errors.name)}
						isInvalid={!!(touched.name && !!errors.name)}
						feedback={errors.name}
					/>
					<FormInputGroup
						controlId={"formRegisterBusinessEmail"}
						id={"registerBusinessEmailGroup"}
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
						feedback={errors.email}
					/>
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

RegisterGastroFormRenderer.propTypes = {
	validationSchema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	registerError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default withRouter(RegisterGastroFormRenderer);

