import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FormControl, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
// import  Offcanvas  from 'react-bootstrap/Offcanvas';
import Offcanvas from './Offcanvas'
import { FaBookReader, FaShoppingCart } from "react-icons/fa";
import { CgMenuRound } from 'react-icons/cg';
import styled from "styled-components";
import "./Header.css";
import { FaSearch, FaHome, FaInfoCircle } from 'react-icons/fa';
import Search from './Search';
import { BsChatQuote } from 'react-icons/bs';
// import { FaAbout } from 'react-icons/fa';

const StyledBrand = styled(Navbar.Brand)`
font-family: 'Dela Gothic One', cursive;
`;

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar
				variant="dark"
				expand="md"
				className="header-nav d-flex nowrap justify-content-between align-items-center"
			>
				{/* <Offcanvas /> */}
				{/* <div className="d-flex justify-content-around"> */}
				{/* <Navbar.Collapse id="basic-navbar-nav"> */}
				<Navbar.Toggle aria-controls="basic-navbar-nav"><CgMenuRound /></Navbar.Toggle>
				<StyledBrand href="/">
					<FaBookReader />


					e-buy!
				</StyledBrand>
				{/* </Navbar.Collapse> */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{/* <Nav.Link href="/account/:id">Account</Nav.Link>
						 */}
						{/* <Nav.Link active href="/login">
							Log In
						</Nav.Link> */}
						<Nav.Link href="/cart">
							<div className="d-flex flex-row align-items-center">
								<FaShoppingCart />{`   `} Cart
							</div>
						</Nav.Link>
						<Nav.Link href="/login">Logout</Nav.Link>
						{/* <Nav.Link href="/register">Register</Nav.Link> */}
						<Nav.Link href="/"><FaHome />{` `}Home</Nav.Link>
						<Nav.Link href="/about"><FaInfoCircle />{` `}About Us</Nav.Link>
						<Nav.Link href="/contact"><BsChatQuote />{` `}Contact us</Nav.Link>
					</Nav>
				</Navbar.Collapse>

			</Navbar>
			<Row className="justify-content-center mr-0">
				{/* <Col md={2}></Col> */}
				<Col md={8}>
					<Search />
				</Col>
				{/* <Col md={2}></Col> */}
			</Row>
		</>
	);
};

export default Header;
