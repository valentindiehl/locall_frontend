import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";
import {Formik} from "formik";
import FormInputGroup from "../../form/FormInputGroup";

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
							<div className="userPictureRow">
								<img alt={"Avatar"}
									 src={!props.isFileSelected ? props.getAvatarUrl() : URL.createObjectURL(props.selectedFile)}
									 className="userPicture"/>

								<div className="file-input-wrapper">
									<button
										className="loginFormButton btn-file-input">{!props.isFileSelected ? "LADE DEIN BILD HOCH" : "BILD ENTFERNEN"} </button>
									<input type="file" name="file" onClick={props.preventPopup}
										   onChange={props.handleFileSelected}/>
								</div>

							</div>

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
	userName: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	validationSchema: PropTypes.object.isRequired,
	onFocus: PropTypes.func.isRequired,
	editError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
	preventPopup: PropTypes.func.isRequired
}

export default EditUserProfileFormRenderer;
