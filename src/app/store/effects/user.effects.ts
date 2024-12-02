import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserActions } from '../actions/user.actions';
import { catchError, map, mergeMap, switchMap, tap, from, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private auth0: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.checkAuth),
      switchMap(() => this.auth0.isAuthenticated$),
      map((isAuthenticated) =>
        UserActions.setAuthentication({ isAuthenticated })
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      tap(() => {
        this.auth0.loginWithRedirect({
          appState: { target: this.router.url }
        });
      })
    ),
    { dispatch: false }
  );

  handleAuthenticationCallback$ = createEffect(() =>
    this.auth0.user$.pipe(
      mergeMap((auth0User) => {
        if (!auth0User) {
          return of(UserActions.loginFailure({ error: 'No user found' }));
        }

        return this.userService.getOrCreateUser({
          email: auth0User.email!,
          name: auth0User.name!,
          picture: auth0User.picture,
          auth0Id: auth0User.sub!
        }).pipe(
          map((user) => UserActions.loginSuccess({ user })),
          catchError((error) => of(UserActions.loginFailure({ error: error.message })))
        );
      })
    )
  );

  handleRedirectCallback$ = createEffect(() =>
    this.auth0.handleRedirectCallback().pipe(
      map((result) => {
        const targetUrl = result.appState?.target || '/projects';
        return UserActions.handleRedirectCallback({ targetUrl });
      }),
      catchError((error) => of(UserActions.loginFailure({ error: error.message })))
    )
  );

  navigateAfterCallback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.handleRedirectCallback),
      tap(({ targetUrl }) => {
        this.router.navigate([targetUrl]);
      })
    ),
    { dispatch: false }
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      mergeMap(({ user }) =>
        this.userService.createUser(user).pipe(
          map((createdUser) => UserActions.createUserSuccess({ user: createdUser })),
          catchError((error) => of(UserActions.createUserFailure({ error: error.message })))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(({ id, changes }) =>
        this.userService.updateUser(id, changes).pipe(
          map((updatedUser) => UserActions.updateUserSuccess({ user: updatedUser })),
          catchError((error) => of(UserActions.updateUserFailure({ error: error.message })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map(() => UserActions.deleteUserSuccess({ id })),
          catchError((error) => of(UserActions.deleteUserFailure({ error: error.message })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logout),
      tap(() => {
        this.auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      })
    ),
    { dispatch: false }
  );
}