import React from 'react'
import { Link } from 'react-router-dom'

// Import the logo
import { ReactComponent as Logo} from '../../assets/logo.svg'

import './header.styles.scss'


const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Link to='/'><Logo /></Link>
    </div>
    <div className='options'>
      <Link className='option' to='/'>Home</Link>
      <Link className='option' to='/shop'>Shop</Link>
    </div>
  </div>
)

export default Header;