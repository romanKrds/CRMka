import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of, defer } from 'rxjs';
import { catchError, map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { UserActionTypes } from '@constants/*';
import { auth, UserInfo } from 'firebase/app';
import {
  LoadServices,
  GetUser,
  Authenticated,
  NotAuthenticated,
  AuthError,
  GoogleLogin,
  PasswordLogin,
  Logout,
  LoadUserData
} from '@actions/*';
import { AngularFireDatabase } from '@angular/fire/database';
// import { User, } from '@models/*';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { UserState } from '@models/*';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {}

  @Effect()
  getUser: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.GetUser),
    switchMap(_ => this.afAuth.authState),
    switchMap((authData: User) => {
      if (authData) {
        let first_name, last_name, displayName;
        if (authData.displayName) {
          const fullName = authData.displayName.split(' ').filter(e => e);
          if (fullName.length > 1) {
            first_name = fullName[0];
            last_name = fullName[0];
            displayName = authData.displayName;
          } else {
            first_name = fullName[0];
            last_name = null;
            displayName = first_name;
          }
        } else {
          first_name = null;
          last_name = null;
          displayName = 'NoName';
        }
      const currentUser = {
        first_name: first_name,
        last_name: last_name,
        displayName: displayName,
        email: authData.email,
        phoneNumber: authData.phoneNumber,
        photoURL: authData.photoURL,
        providerId: authData.providerId,
        uid: authData.uid
      };
      const userListRef = this.db.object('/clients/' + authData.uid);
      userListRef.update(currentUser);
      return userListRef.valueChanges();
    }
      return of(null);
    }),
    switchMap((user: UserState) => {
      if (user) {
        return from([new Authenticated({ user })]);
      } else {
        return of(new NotAuthenticated());
      }
    }),
    catchError(err => of(new AuthError({ error: err.message })))
  );

  @Effect({dispatch: false})
  loginPassword: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.EmailPasswordLogin),
    map((action: PasswordLogin) => action.payload),
    tap(action => {
      return of(this.signInWithEmailAndPassword(action));
    }),
    catchError(err => of(new AuthError({ error: err.message })))
  );

  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.Logout),
    map((action: Logout) => {
      return action.payload;
    }),
    switchMap(payload => {
      return of(this.afAuth.auth.signOut());
    }),
    map(authData => {
      return new NotAuthenticated();
    }),
    catchError(err => of(new AuthError({ error: err.message })))
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new GetUser());
  });

  private signInWithEmailAndPassword(data) {
    console.log('PasswordLogin', data);
    return this.afAuth.auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
  }
}
