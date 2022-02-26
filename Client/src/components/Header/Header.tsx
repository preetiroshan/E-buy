import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";
import Sidenav from '../Sidenav/Sidenav';
import CartIcon from './CartIcon'
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { StoreState } from '../../redux/store'
import { TUserState } from "../../redux/reducers/users/signin/signInReducer";

const Header = () => {
	const { signInData } = useSelector<StoreState, TUserState>((state) => state.user.signIn);
	const openMenu = () => {
		if (document.getElementById("sideNavMenu") !== null) {
			(document.getElementById("sideNavMenu")!.style.width = '60%');
			document.getElementById("sideNavMenu")!.style.maxWidth = '250px';
		}
	}

	const closeMenu = () => {
		if (document.getElementById("sideNavMenu") !== null) {
			(document.getElementById("sideNavMenu")!.style.width = '0');
		}
	}

	return (
		<div className="header">
			<Sidenav closeMenu={closeMenu} signInData={signInData} />
			<Row className="header-nav m-0 p-4">
				<Col md={2} xs={4} sm={2}>
					<Row>
						<img src="/assets/icon-menu.svg" alt="menu-icon" onClick={openMenu} />
						<a href="/"><img src="/assets/ebuy.png" alt="logo" className="menu-icon" /></a>
					</Row>
				</Col>
				<Col md={8} xs={12} sm={6} className="p-0">
					<Search />
				</Col>
				<Col md={1} sm={2}>
					<CartIcon />
				</Col>
				<Col md={1} sm={2}>
					<img src="/assets/user.png" alt="user-icon" className="nav-icon" id="cartIcon" />
				</Col>
			</Row>
		</div>
	);
};

export default Header;
