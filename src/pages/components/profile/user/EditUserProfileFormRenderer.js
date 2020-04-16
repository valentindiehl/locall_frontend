import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";
import {Formik} from "formik";
import FormInputGroup from "../../form/FormInputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const EditUserProfileFormRenderer = (props) => {
	return (
		<Formik validationSchema={props.validationSchema}
				initialValues={{userName: !!props.userName ? props.userName : ""}}
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
					  onSubmit={handleSubmit.bind(this)}>
					<Form.Row>
						<Form.Group className="userPictureForm">
							<Form.Label className="label">Dein Profilfoto</Form.Label>
							<Row className="userPictureRow">
								<Col md={3}>
									<img alt={"Avatar"}
										 src={!props.isFileSelected ? props.getAvatarUrl() : URL.createObjectURL(props.selectedFile)}
										 className="userPicture"/>
								</Col>
								<Col md={9}>
									<div className="file-input-wrapper">
										<button style={{marginTop: 10}}
											className="loginFormButton btn-file-input">{!props.isFileSelected ? "LADE DEIN BILD HOCH" : "BILD ENTFERNEN"} </button>
										<input style={{cursor: "pointer"}} type="file" name="file"
											   onClick={props.preventPopup}
											   onChange={props.handleFileSelected}/>
									</div>
								</Col>
							</Row>

						</Form.Group>
					</Form.Row>
					<FormInputGroup
						controlId={"formEditName"}
						id={"editNameGroup"}
						imageClassName={"loginIcon"}
						imageSrc={"/assets/icons/name.svg"}
						value={values.userName}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={props.onFocus}
						type={"text"}
						name={"userName"}
						placeholder={"Dein Name"}
						className={"nameUser loginForm" + (props.editError && "is-invalid")}
						isValid={!!(touched.userName && !errors.userName)}
						isInvalid={!!(touched.userName && !!errors.userName)}
						feedback={errors.userName}/>
					{props.errorMessage && <div className="feedback">{props.errorMessage}</div>}
					{props.successMessage && <div style={{color: "green"}}>{props.successMessage}</div>}
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

EditUserProfileFormRenderer.propTypes = {
	isFileSelected: PropTypes.bool.isRequired,
	getAvatarUrl: PropTypes.func.isRequired,
	selectedFile: PropTypes.any,
	handleFileSelected: PropTypes.func.isRequired,
	userName: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	validationSchema: PropTypes.object.isRequired,
	onFocus: PropTypes.func.isRequired,
	editError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
	successMessage: PropTypes.string,
	preventPopup: PropTypes.func.isRequired
}

export default EditUserProfileFormRenderer;
