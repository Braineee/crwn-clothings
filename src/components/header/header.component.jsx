import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Import the fire base library
import { auth } from '../../firebase/firebase-utils';

// Import the logo
import { ReactComponent as Logo} from '../../assets/logo.svg';

import './header.styles.scss';


const Header = ({ currentUser }) => (
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
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);