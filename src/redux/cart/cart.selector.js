import { createSelector } from 'reselect'

// Get the cart state
const selectCart = state => state.cart;

// Get the cart items from the cart state
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Get the count of items in the cart from the cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalCount, cartItem) => totalCount + cartItem.quantity, 0)
);