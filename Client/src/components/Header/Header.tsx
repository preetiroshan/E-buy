import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";
import { FaBookReader, FaShoppingCart } from "react-icons/fa";
import { CgMenuRound } from 'react-icons/cg';
import styled from "styled-components";
import "./Header.css";
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import Search from '../Search';
import { BsChatQuote } from 'react-icons/bs';
import Sidenav from '../Sidenav/Sidenav';
import CartIcon from './CartIcon'

const StyledBrand = styled(Navbar.Brand)`
// font-family: 'Dela Gothic One', cursive;
`;

const Header = () => {
	const openMenu = () => {
		if (document.getElementById("sideNavMenu") !== null) {
			(document.getElementById("sideNavMenu")!.style.width = '60%');
			document.getElementById("sideNavMenu")!.style.maxWidth = '250px';
		}
		// document.body.style.backgroundColor = 'var(--grey-bg)';
	}

	const closeMenu = () => {
		if (document.getElementById("sideNavMenu") !== null) {
			(document.getElementById("sideNavMenu")!.style.width = '0');
		}
		// document.body.style.backgroundColor = 'var(--grey-bg)';
	}

	return (
		<>
			<Sidenav closeMenu={closeMenu} />
			{/* <nav
				className="header-nav d-flex nowrap justify-content-between align-items-center"
			> */}
			<Row className="header-nav">
				<Col md={2} xs={12} sm={3}>
					<Row>
						<img src="/assets/icon-menu.svg" alt="menu-icon" onClick={openMenu} />
						<a href="/"><img src="/assets/ebuy.png" alt="logo" className="menu-icon" /></a>
					</Row>
				</Col>
				<Col md={8} xs={6} sm={5}>
					<Search />
				</Col>
				<Col md={1} sm={2}>
					<CartIcon />
				</Col>
				<Col md={1} sm={2}>
					<img src="/assets/user.png" alt="user-icon" className="nav-icon" id="cartIcon" />
				</Col>
			</Row>
			{/* <Navbar.Toggle aria-controls="basic-navbar-nav"><CgMenuRound /></Navbar.Toggle> */}
			{/* <StyledBrand href="/"> */}




			{/*
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">
							{/* <FaHome />{` `} */}
			{/* Home</Nav.Link>
						<Nav.Link href="/cart">
							<div className="d-flex flex-row align-items-center"> */}
			{/* <FaShoppingCart />{`   `}  */}
			{/* Cart
							</div>
						</Nav.Link>
						<Nav.Link href="/about"> */}
			{/* <FaInfoCircle />{` `} */}
			{/* About Us</Nav.Link>
						<Nav.Link href="/contact"> */}
			{/* <BsChatQuote />{` `} */}
			{/* Contact us</Nav.Link> */}
			{/* <Nav.Link href="/login">Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse> */}
			{/* </nav> */}
			<Row className="justify-content-center mr-0">
				<Col md={8}>
					{/* <Search /> */}
				</Col>
			</Row>
		</>
	);
};

export default Header;
