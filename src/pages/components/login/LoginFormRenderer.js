import React from "react";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {HashLink as Link} from "react-router-hash-link";
import {withRouter} from "react-router-dom";
import FormInputGroup from "../form/FormInputGroup";
import * as PropTypes from 'prop-types';

import '../../css/form/form.css';

const LoginFormRenderer = (props) => {

	return (
		<>
			<Formik history={props.history}
					validationSchema={props.validationSchema}
					initialValues={{email: "", password: ""}}
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
							onFocus={props.onFocus}
							type={"email"}
							name={"email"}
							placeholder={"Deine E-Mail-Adresse"}
							className={"emailUser loginForm" + (props.loginError && "is-invalid")}
							isValid={false}  // we do not want to show valid to not falsely imply a correct email
							isInvalid={!!(touched.email && !!errors.email)}
							feedback={errors.email}
						/>
						<FormInputGroup
							controlId={"formBasicPassword"}
							id={"passwordGroup"}
							imageClassName={"loginIcon"}
							imageSrc={"/assets/icons/icons-passwort.svg"}
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={props.onFocus}
							type={"password"}
							name={"password"}
							className={"passwordUser loginForm" + (props.loginError && "is-invalid")}
							isValid={false} // we do not want to show valid to not falsely imply a correct password
							isInvalid={!!(touched.password && !!errors.password)}
							feedback={errors.password}
							placeholder={"Dein Passwort"}
						/>
						{props.errorMessage && <div className="feedback">{props.errorMessage}</div>}
						<Button className="loginFormButton" type="submit" value="Submit">
							Einloggen
						</Button>
					</Form>
				)}
			</Formik>
			<Container className={"notRegisteredWrapper"}>
				<Link className="notRegistered" to="/register">Registrieren</Link>
			</Container>
		</>
	)
}

LoginFormRenderer.propTypes = {
	validationSchema: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	loginError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default withRouter(LoginFormRenderer)
