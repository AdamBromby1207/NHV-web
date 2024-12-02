import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../state/user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectIsAuthenticated = createSelector(
  selectUserState,
  (state: UserState) => state.isAuthenticated
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state: UserState) => state.isLoading
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.currentUser
);

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectReturnUrl = createSelector(
  selectUserState,
  (state: UserState) => state.returnUrl
);
