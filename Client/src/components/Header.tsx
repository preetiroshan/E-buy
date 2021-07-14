import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FormControl, InputGroup, Button, Container } from "react-bootstrap";
// import  Offcanvas  from 'react-bootstrap/Offcanvas';
import Offcanvas from './Offcanvas'
import { FaBookReader, FaShoppingCart } from "react-icons/fa";
import { CgMenuRound } from 'react-icons/cg';
import styled from "styled-components";
import "./Header.css";
import { FaSearch, FaHome } from 'react-icons/fa';
import Search from './Search';
import { BsChatQuote } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';

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

					{` `}
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
					</Nav>
				</Navbar.Collapse>


				{/* <InputGroup>
					<FormControl id="inlineFormInputGroup" placeholder="Type here to search.." />
					<InputGroup.Prepend>
						<InputGroup.Text>
							<FaSearch />
						</InputGroup.Text>
					</InputGroup.Prepend>
				</InputGroup> */}
				<Search />
				{/* </div> */}


			</Navbar>
			{/* <Container style={{ backgroundColor: '#000000' }}> */}
			<Nav fill variant="tabs" className="navTabs">
				<Nav.Item className="navItem">
					<Nav.Link href="/">Home{` `}<FaHome /></Nav.Link>
				</Nav.Item>
				<Nav.Item className="navItem">
					<Nav.Link href="/about">About Us<FcAbout /></Nav.Link>
				</Nav.Item>
				<Nav.Item className="navItem">
					<Nav.Link href="/contact">Contact us{` `}<BsChatQuote /></Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
};

export default Header;
