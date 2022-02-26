import React, { useCallback } from 'react'
import CartIcon from '../Header/CartIcon'
import './Sidenav.css';
import { useDispatch } from "react-redux";
import userActions from '../../redux/actions/user/userActions';
import { TSignInResponse } from '../../userTypes';

export type TSidenavProps = {
  closeMenu: () => void;
  signInData: TSignInResponse | null;
}

const Sidenav = ({ closeMenu, signInData }: TSidenavProps) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(
    () => {
      dispatch(userActions.logout())
    },
    [dispatch],
  )

  return (
    <nav className="sideNav" id="sideNavMenu">
      <ul>
        <span id="close-btn" onClick={closeMenu}>&times;</span>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <CartIcon />
        </li>
        {
          (signInData?.name) ?
            <p onClick={handleLogout}>Logout
              {/* TODO: Change this username from here */}
              <br /> {signInData.name}
            </p>
            :
            <li><a href="/login">Login</a></li>
        }
      </ul>
    </nav>
  )
}

export default Sidenav
