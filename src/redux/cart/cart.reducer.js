import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, reduceItemQuantity } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
        }
      // eslint-disable-next-line
      break;
    
    case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
        // eslint-disable-next-line
      break;
    
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
      // eslint-disable-next-line
      break;

    case CartActionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload)
      }
      // eslint-disable-next-line
      break;
  
    default:
        return state;
      // eslint-disable-next-line
      break;
  }
}

export default cartReducer;