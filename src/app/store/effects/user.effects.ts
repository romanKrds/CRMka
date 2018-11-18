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
        return new userActions.Authenticated(authData);
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

  @Effect({dispatch: false})
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
  @Effect()
  loginPassword: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.EmailPasswordLogin),
    map((action: userActions.PasswordLogin) => action.payload),
    switchMap(action => {
      console.log(action);
      return from(this.PasswordLogin(action));
    }),
    map(credential => {
      console.log(credential);
      return new userActions.GetUser();
    }),
    catchError(err => of(new userActions.AuthError({ error: err.message})))
  );
  @Effect()
  registerPassword: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.EmailPasswordRegister),
    map((action: userActions.PasswordLogin) => action.payload),
    switchMap(action => {
      console.log(action);
      return from(this.createUserWithEmailAndPassword(action));
    }),
    map(credential => {
      console.log(credential);
      return new userActions.GetUser();
    }),
    catchError(err => of(new userActions.AuthError({ error: err.message})))
  );

  private GoogleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
  private PasswordLogin(data) {
    console.log('PasswordLogin', data);
    return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
  }
  private createUserWithEmailAndPassword(data) {
    console.log('CreateUser', data);
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);
  }
}
