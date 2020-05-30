import { createSelector } from 'reselect'

// Select the cart state
const selectCart = state => state.cart;

// Select the cart items from the cart state
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Select the toggel cart hidden from the cart state 
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// Select the count of items in the cart from the cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalCount, cartItem) => totalCount + cartItem.quantity, 0)
);

// Select the cart total
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price, 0)
);