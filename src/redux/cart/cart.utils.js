export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find( cartItems => cartItems.id === cartItemToAdd.id );

  if (exisitingCartItem) {
    return cartItems.map( cartItem => 
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [ ...cartItems, {...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

  const exisitingCartItem = cartItems.find(cartItems => cartItems.id === cartItemToRemove.id);

  if (exisitingCartItem) return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

  return [...cartItems ];
}

export const reduceItemQuantity = (cartItems, cartItemToReduce) => {

  const exisitingCartItem = cartItems.find(cartItems => cartItems.id === cartItemToReduce.id);

  if (exisitingCartItem.quantity === 1) return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);

  if (exisitingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToReduce.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
  }

  return [...cartItems];
}