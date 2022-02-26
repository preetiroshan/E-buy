import { useEffect } from "react";
import { Container, Jumbotron, Form, Col, Button, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import userActions from "../../../redux/actions/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../../../redux/store'
import { TUserState } from "../../../redux/reducers/users/signin/signInReducer";
import { Link, useHistory } from "react-router-dom"
import { signInFilter } from "../../../userTypes";

const Login = ({ location }: any) => {
	const { signInData, isLoading, error } = useSelector<StoreState, TUserState>((state) => state.user.signIn);
	const schema = yup.object().shape({
		email: yup.string().email("Not a valid email").required(),
		password: yup.string().required(),
	});

	const history = useHistory();
	useEffect(() => {
		!(signInData && signInData.name) && error && alert("Invalid Credentials")
		signInData && signInData.name && history.push(location.state.redirectPath || '/')
	}, [signInData, history, location, error])

	const dispatch = useDispatch();
	const handleSubmit = (values: any) => {
		dispatch(
			userActions.signIn({
				email: values.email,
				password: values.password,
			})
		);
	};

	const initialValues: signInFilter = {
		email: "",
		password: "",
	}
	return (
		<>
			{isLoading && <Spinner animation="grow" />}
			<div className="d-flex flex-row justify-content-center">
				<Col lg={4} md={6}>
					<Jumbotron className="my-4" fluid>
						<Container>
							<Formik
								enableReinitialize
								validationSchema={schema}
								initialValues={initialValues}
								onSubmit={handleSubmit}
							>
								{({
									handleChange,
									handleSubmit,
									values,
									touched,
									errors,
								}) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Col>
											<Form.Group as={Col} controlId="validationFormik02">
												<Form.Label>Email</Form.Label>
												<Form.Control
													type="email"
													name="email"
													placeholder="user@somewhere.com"
													value={values.email}
													onChange={handleChange}
													isInvalid={touched.email && !!errors.email}
												// error={errors.email}
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
												<Button type="submit">Login</Button>
												<br />
												<br />
												Don't have an account?
												<Link to="/register"><Button type="submit">
													Sign Up
												</Button></Link>
											</div>
										</Col>
									</Form>
								)}
							</Formik>
						</Container>
					</Jumbotron>
				</Col>
			</div>
		</>
	);
};

export default Login;
