import React from 'react';
import { connect } from 'react-redux';

// import the card item component
import CartItem from '../cart-items/cart-item.component';

// import the  custom button component
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      }
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);

