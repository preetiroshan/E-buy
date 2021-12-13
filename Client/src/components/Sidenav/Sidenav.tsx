import React from 'react'
import CartIcon from '../Header/CartIcon'
import './Sidenav.css'

export type TSidenavProps = {
  closeMenu: () => void;
}

const Sidenav = ({ closeMenu }: TSidenavProps) => {


  return (
    <nav className="sideNav" id="sideNavMenu">
      <ul>
        <span id="close-btn" onClick={closeMenu}>&times;</span>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart">
          <CartIcon />
        </a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Sidenav
