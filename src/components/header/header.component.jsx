import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase-utils';// Import the fire base library
import CartIcon from '../cart-icon/cart-icon.component';// Import the cart icon component
import CartDropdown from '../cart-dropdown/cart-dropdown.component';// Import dropdown component
import { selectCurrentUser } from '../../redux/user/user.selector';// Import the user selector
import { selectCartHidden } from '../../redux/cart/cart.selector';// Import the cart selector

import { ReactComponent as Logo } from '../../assets/logo.svg';// Import the logo

import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <div className='logo-container'>
      <Link to='/'><Logo /></Link>
    </div>
    <div className='options'>
      <Link className='option' to='/'>HOME</Link>
      <Link className='option' to='/shop'>SHOP</Link>
      {
        currentUser ? 
          (<div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>)
        :
          (<Link className='option' to='/signin'> SIGN IN </Link>)
      }
      <CartIcon />
    </div>
    {
      hidden ? null : (<CartDropdown />)
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);