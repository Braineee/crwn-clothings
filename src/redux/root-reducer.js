import { combineReducers } from 'redux'

// Import the user reducer
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer
});