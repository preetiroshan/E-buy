import React, { useState } from "react";
import {
	Container,
	Jumbotron,
	Form,
	Col,
	InputGroup,
	Button,
} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";

const Login = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email("Not a valid email").required(),
		password: yup.string().required(),
		password2: yup.string().required(),
	});

	const dispatch = useDispatch();
	const handleSubmit = () => {
		dispatch(
			actions.signIn({
				email: "abc@abc.com",
				password: "pass",
			})
		);
	};

	return (
		<div className="d-flex flex-row justify-content-center">
			<Col lg={4} md={6}>
				<Jumbotron className="my-4" fluid>
					<Container>
						<Formik
							enableReinitialize
							validationSchema={schema}
							initialValues={{
								email: "",
								password: "",
							}}
							// onSubmit={(values, { setSubmitting, resetForm }) => {
							onSubmit={() => {
								handleSubmit();
								console.log("hi");
								// resetForm();
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
										<Form.Group as={Col} controlId="validationFormik02">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												// placeholder=""
												name="email"
												value={values.email}
												onChange={handleChange}
												isInvalid={touched.email && !!errors.email}
												error={errors.email}
												// autoComplete="off"
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
										<div className="d-flex flex-column align-items-center">
											{/* <div> */}
											<Button type="submit">Login</Button>
											or
											{/* <Button
												type="submit"
												variant="light"
												onClick={handleSubmit}
											>
												Sign in with <FcGoogle />
											</Button> */}
											<br />
											<br />
											Don't have an account?
											{/* <Button type="submit" onClick={handleSubmit}>
												Sign Up
											</Button> */}
											{/* </div> */}
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

export default Login;
