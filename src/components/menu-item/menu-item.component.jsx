import React from 'react'
import './menu-item.styles.scss';


// Style the menu item
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div 
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'> { title } </h1>
        <span className='subtitle'> SHOP NOW </span>
      </div>
    </div>
  )
} 

export default MenuItem;