import React from "react";
import { Container, Jumbotron, Form, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email("Not a valid email").required(),
		password: yup.string().required(),
		password2: yup.string().required(),
	});

	return (
		<div className="d-flex flex-row justify-content-center">
			<Col lg={4} md={6}>
				<Jumbotron className="my-4" fluid>
					<Container>
						<Formik
							enableReinitialize
							validationSchema={schema}
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
								password: "",
								password2: "",
							}}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								console.log(values);
								resetForm();
							}}
						>
							{({
								handleSubmit,
								handleChange,
								handleBlur,
								handleReset,
								values,
								touched,
								isValid,
								isInvalid,
								errors,
							}) => (
								<Form noValidate onSubmit={handleSubmit}>
									<Col>
										{console.log(errors)}
										<Form.Group as={Col} controlId="firstName">
											<Form.Label>First name</Form.Label>
											<Form.Control
												type="text"
												name="firstName"
												// placeholder="Username"
												value={values.firstName}
												onChange={handleChange}
												isInvalid={touched.firstName && !!errors.firstName}
												error={errors.firstName}
											/>
											<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} controlId="lastName">
											<Form.Label>Last name</Form.Label>
											<Form.Control
												type="text"
												name="lastName"
												value={values.lastName}
												onChange={handleChange}
												isInvalid={touched.lastName && !!errors.lastName}
											/>

											<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} controlId="validationFormik02">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												placeholder="Enter Password"
												name="email"
												value={values.email}
												onChange={handleChange}
												isInvalid={touched.email && !!errors.email}
												error={errors.email}
											/>
											<Form.Control.Feedback type="invalid">
												{errors.email}
											</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col} controlId="validationFormik03">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												placeholder="Enter Password"
												name="password"
												value={values.password}
												onChange={handleChange}
												isInvalid={touched.password && !!errors.password}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.password}
											</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} controlId="validationFormik04">
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												type="password"
												placeholder="Confirm Password"
												name="password2"
												value={values.password2}
												onChange={handleChange}
												isInvalid={touched.password2 && !!errors.password2}
											/>
											<Form.Control.Feedback type="invalid">
												{errors.state}
											</Form.Control.Feedback>
										</Form.Group>
										<div className="d-flex flex-row justify-content-center">
											<Button type="submit" onClick={handleSubmit}>
												Register
											</Button>
										</div>
									</Col>
								</Form>
							)}
						</Formik>
					</Container>
				</Jumbotron>
			</Col>
		</div>
	);
};

export default Register;
