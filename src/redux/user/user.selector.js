import { createSelector } from 'reselect';

// Select the user state
const selectUser = state => state.user;

// Select the current user from the user state
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)