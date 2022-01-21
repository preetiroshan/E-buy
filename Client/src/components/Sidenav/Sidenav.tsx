import React, { useCallback } from 'react'
import CartIcon from '../Header/CartIcon'
import './Sidenav.css';
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../../redux/store'
import { TUserState } from "../../redux/reducers/users/signin/signInReducer";
import userActions from '../../redux/actions/user/userActions';
import { TSignInResponse } from '../../userTypes';

export type TSidenavProps = {
  closeMenu: () => void;
  signInData: TSignInResponse | null;
}

const Sidenav = ({ closeMenu, signInData }: TSidenavProps) => {
  // const { signInData } = useSelector<StoreState, TUserState>((state) => state.user.signIn);
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
          <>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
              <li>{signInData.name}</li>
          </>
            :
            <li><a href="/login">Login</a></li>
        }
      </ul>
    </nav>
  )
}

export default Sidenav
