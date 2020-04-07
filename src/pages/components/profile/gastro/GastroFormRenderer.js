import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";

const GastroFormRenderer = (props) => {
	return (
		<Formik validationSchema={props.validationSchema}
				initialValues={{description: props.description, paypalname: props.paypal}}
				onSubmit={props.onSubmit}>
			{({
				  handleSubmit,
				  handleChange,
				  handleBlur,
				  values,
				  touched,
				  errors,
			  }) => (
				<Form className="profileForm"
					  noValidate
					  onSubmit={handleSubmit.bind(this)}>
					<Form.Group className="inputForm">
						<Form.Label className="label">Beschreibung (max. 150 Zeichen)</Form.Label>
						<Form.Control required value={values.description}
									  onChange={handleChange}
									  onBlur={handleBlur}
									  onFocus={props.onFocus}
									  as="textarea"
									  rows="4"
									  name="description"
									  className={"textArea loginForm" + (props.updateError && "is-invalid")}
									  isValid={!!(touched.description && !errors.description)}
									  isInvalid={!!(touched.description && !!errors.description)}/>
						<Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
						<Form.Label className="label">PayPal.Me-Nutzername</Form.Label>
						<Form.Control required value={values.paypalname}
									  onChange={handleChange}
									  onBlur={handleBlur}
									  onFocus={props.onFocus}
									  type="text"
									  name="paypalname"
									  className={"loginForm" + (props.updateError && "is-invalid")}
									  isValid={!!(touched.paypalname && !errors.paypalname)}
									  isInvalid={!!(touched.paypalname && !!errors.paypalname)}/>
						<Form.Control.Feedback type="invalid">{errors.paypalname}</Form.Control.Feedback>
					</Form.Group>
					{props.errorMessage && <div className="feedback">{props.errorMessage}</div>}
					<Button className="small-button button-orange"
							variant="link"
							type="submit">
						SPEICHERN
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default GastroFormRenderer;
