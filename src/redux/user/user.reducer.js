
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
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