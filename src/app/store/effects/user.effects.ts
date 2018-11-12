import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as userActions from '../actions/user.actions';
import { UserActionTypes } from '../constants/user.constants';
import { auth } from 'firebase/app';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private afAuth: AngularFireAuth) {}

  @Effect()
  getUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.GetUser),
    map((action: userActions.GetUser) => action.payload),
    switchMap(payload => this.afAuth.authState),
    map(authData => {
      if (authData) {
        const {uid, displayName} = authData;
        return new userActions.Authenticated({uid, displayName});
      } else {
        return new userActions.NotAuthenticated();
      }
    }),
    catchError(err => of(new userActions.AuthError()))
  );

  @Effect()
  loginGoogle: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.GoogleLogin),
    map((action: userActions.GoogleLogin) => action.payload),
    switchMap(payload => {
      return from(this.GoogleLogin());
    }),
    map(credential => {
      return new userActions.GetUser();
    }),
    catchError(err => of(new userActions.AuthError({ error: err.message })))
  );

  @Effect()
  logout: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.Logout),
    map((action: userActions.Logout) => {
      return action.payload;
    }),
    switchMap(payload => {
      return of(this.afAuth.auth.signOut());
    }),
    map(authData => {
      return new userActions.NotAuthenticated();
    }),
    catchError(err => of(new userActions.AuthError({ error: err.message })))
  );

  private GoogleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
