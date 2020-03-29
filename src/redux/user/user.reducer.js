import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        }
      // eslint-disable-next-line
      break;
  
    default:
        return state
      // eslint-disable-next-line
      break;
  }
}

export default userReducer;