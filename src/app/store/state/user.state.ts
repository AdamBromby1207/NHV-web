import { BaseState } from './base.state';

export interface User {
  id: string;
  email: string;
  name: string;
  given_name?: string;
  picture?: string;
  auth0Id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserState extends BaseState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  currentUser: User | null;
  users: User[];
  returnUrl: string | null;
}

export const initialUserState: UserState = {
  isAuthenticated: false,
  isLoading: true,
  error: null,
  currentUser: null,
  users: [],
  returnUrl: null,
};