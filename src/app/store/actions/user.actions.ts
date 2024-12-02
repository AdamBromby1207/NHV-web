import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../state/user.state';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    // Auth0 Authentication Actions
    'Check Auth': emptyProps(),
    'Set Authentication': props<{ isAuthenticated: boolean }>(),
    'Login': emptyProps(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: string }>(),
    'Handle Redirect Callback': props<{ targetUrl: string }>(),
    'Set Return URL': props<{ url: string }>(),
    'Logout': emptyProps(),
    'Logout Success': emptyProps(),
    'Logout Failure': props<{ error: string }>(),
    'Clear Auth State': emptyProps(),

    // User Management Actions
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),
    'Create User': props<{ user: Partial<User> }>(),
    'Create User Success': props<{ user: User }>(),
    'Create User Failure': props<{ error: string }>(),
    'Update User': props<{ id: string; changes: Partial<User> }>(),
    'Update User Success': props<{ user: User }>(),
    'Update User Failure': props<{ error: string }>(),
    'Delete User': props<{ id: string }>(),
    'Delete User Success': props<{ id: string }>(),
    'Delete User Failure': props<{ error: string }>()
  }
});