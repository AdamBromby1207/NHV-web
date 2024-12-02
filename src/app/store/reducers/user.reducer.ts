import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { UserState } from '../state/user.state';

export const initialState: UserState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  currentUser: null,
  users: [],
  returnUrl: null
};

export const userReducer = createReducer(
  initialState,
  
  // Authentication actions
  on(UserActions.checkAuth, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.setAuthentication, (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated,
    isLoading: false
  })),

  on(UserActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    currentUser: user,
    error: null
  })),

  on(UserActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(UserActions.setReturnURL, (state, { url }) => ({
    ...state,
    returnUrl: url
  })),

  on(UserActions.logout, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    currentUser: null,
    isLoading: false
  })),

  on(UserActions.logoutFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // User management actions
  on(UserActions.loadUsers, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    isLoading: false,
    error: null
  })),

  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(UserActions.createUser, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    isLoading: false,
    error: null
  })),

  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(UserActions.updateUser, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    isLoading: false,
    error: null
  })),

  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(UserActions.deleteUser, (state) => ({
    ...state,
    isLoading: true
  })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
    isLoading: false,
    error: null
  })),

  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Clear state
  on(UserActions.clearAuthState, (state) => ({
    ...initialState,
    users: state.users
  }))
);
