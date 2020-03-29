import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ togggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={togggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> { itemCount } </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  togggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);