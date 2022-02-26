import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";
import Sidenav from '../Sidenav/Sidenav';
import CartIcon from './CartIcon'
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../../redux/store'
import { TUserState } from "../../redux/reducers/users/signin/signInReducer";

const Header = () => {
	const { signInData } = useSelector<StoreState, TUserState>((state) => state.user.signIn);
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
		<div className="header" onScroll={() => console.log("csrolled")}>
			<Sidenav closeMenu={closeMenu} signInData={signInData} />
			<Row className="header-nav">
				<Col md={2} xs={2} sm={3}>
					<Row>
						<img src="/assets/icon-menu.svg" alt="menu-icon" onClick={openMenu} />
						<a href="/"><img src="/assets/ebuy.png" alt="logo" className="menu-icon" /></a>
					</Row>
				</Col>
				<Col md={8} xs={8} sm={8}>
					<Search />
				</Col>
				<Col md={1} sm={2}>
					<CartIcon />
				</Col>
				<Col md={1} sm={2}>
					<img src="/assets/user.png" alt="user-icon" className="nav-icon" id="cartIcon" />
				</Col>
			</Row>
			{/*
			<Row className="justify-content-center mr-0">
				<Col md={8}>
				</Col>
			</Row> */}
		</div>
	);
};

export default Header;
