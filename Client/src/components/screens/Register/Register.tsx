import React, { useCallback } from "react";
import { Container, Jumbotron, Form, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { TRegisterForm } from "../../../redux/reducers/users/register/types";
import { useDispatch } from "react-redux";
import userActions from "../../../redux/actions/user/userActions";

const Register = () => {
	const initialValues: TRegisterForm = {
		name: "",
		email: "",
		password: "",
		confirmedPassword: "",
	};
	const schema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email("Not a valid email").required(),
		password: yup.string().required(),
		confirmedPassword: yup.string().required(),
	});

	const dispatch = useDispatch()

	const handleSubmit = useCallback(
		(values: any) => {
			dispatch(userActions.register(values))
		},
		[dispatch],
	)
	return (
		<div className="d-flex flex-row justify-content-center">
			<Col lg={4} md={6}>
				<Jumbotron className="mb-4" fluid>
					<Container>
						<Formik
							enableReinitialize
							validationSchema={schema}
							initialValues={initialValues}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								handleSubmit(values);
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
								errors,
							}) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Col>
											{console.log(errors)}
											<Form.Group as={Col} controlId="name">
												<Form.Label>Name</Form.Label>
												<Form.Control
													type="text"
													name="name"
													value={values.name}
													onChange={handleChange}
													isInvalid={touched.name && !!errors.name}
												// error={errors.name}
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
												// error={errors.email}
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
													name="confirmedPassword"
													value={values.confirmedPassword}
													onChange={handleChange}
													isInvalid={touched.confirmedPassword && !!errors.confirmedPassword}
												/>
												<Form.Control.Feedback type="invalid">
													{/* {errors.state} */}
												</Form.Control.Feedback>
											</Form.Group>
											<div className="d-flex flex-row justify-content-center">
												<Button type="submit">
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
