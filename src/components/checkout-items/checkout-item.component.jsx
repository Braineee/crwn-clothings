import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, reduceQuantity } from '../../redux/cart/cart.actions'; 

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, removeItem, addItem, reduceQuantity }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={ imageUrl } alt='item'/>
      </div>
      <span className='name'>{ name }</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => reduceQuantity(cartItem)}>&#10094;</div>
        <span className='value'>{ quantity }</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{ price }</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)} >&#10005;</div>
    </div>
  )
}

const matchDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceQuantity: item => dispatch(reduceQuantity(item))
})

export default connect(null, matchDispatchToProps)(CheckoutItem);