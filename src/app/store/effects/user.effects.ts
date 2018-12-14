import {
  Authenticated,
  AuthError,
  ClearBusinesses,
  GetUser,
  LoadBusiness,
  Logout,
  NotAuthenticated,
  PasswordLogin,
  ClearStatuses,
  ClearOrders,
  ClearServices,
  ClearCustomers,
  ClearCurrentBusiness
} from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { UserActionTypes } from '@constants/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { User as UserFireBase } from 'firebase/app';
import { defer, from, Observable, of } from 'rxjs';
import {
  catchError,
  map,
  pluck,
  switchMap,
  tap,
  mergeMap
} from 'rxjs/operators';
import { User } from '@models/';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {}

  @Effect()
  getUser: Observable<Action | {}> = this.actions$.pipe(
    ofType(UserActionTypes.GetUser),
    map((action: GetUser) => action),
    switchMap(_ => this.afAuth.authState),
    switchMap((authData: UserFireBase) => {
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
        const currentUser: User = {
          first_name: first_name,
          last_name: last_name,
          displayName: displayName,
          email: authData.email,
          phoneNumber: authData.phoneNumber,
          photoURL: authData.photoURL,
          providerId: authData.providerId,
          uid: authData.uid
        };
        const userListRef = this.db.object<User>('/clients/' + authData.uid);
        userListRef.update(currentUser);
        return userListRef.valueChanges();
      }
      return of(null);
    }),
    map((user: User) => {
      if (user) {
        return new Authenticated({ user });
      } else {
        return new NotAuthenticated();
      }
    }),
    catchError(err => of(new AuthError({ error: err.message })))
  );

  @Effect()
  authenticated$ = this.actions$.pipe(
    ofType<Authenticated>(UserActionTypes.Authenticated),
    tap(_ => {
      this.router.navigate(['select-business']);
    }),
    map(() => new LoadBusiness()),
    catchError(err => {
      console.log('authenticatedError', err);
      return err;
    })
  );
  @Effect()
  notAuthenticated$ = this.actions$.pipe(
    ofType<NotAuthenticated>(UserActionTypes.NotAuthenticated),
    tap(() => {
      this.router.navigate(['']);
    }),
    mergeMap(() =>
      from([
        new ClearCustomers(),
        new ClearOrders(),
        new ClearStatuses(),
        new ClearCurrentBusiness(),
        new ClearServices(),
        new ClearBusinesses()
      ])
    ),
    catchError(err => {
      console.log('notAuthenticatedError', err);
      return err;
    })
  );
  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.Logout),
    map((action: Logout) => action.payload),
    switchMap(_ => {
      return of(this.afAuth.auth.signOut());
    }),
    map(_ => {
      return new NotAuthenticated();
    }),
    catchError(error => {
      return of(new AuthError({ error }));
    })
  );

  @Effect()
  loginPassword: Observable<Action> = this.actions$.pipe(
    ofType<PasswordLogin>(UserActionTypes.EmailPasswordLogin),
    pluck('payload'),
    switchMap((loginData: { email: string; password: string }) => {
      console.log('loginData', loginData);
      return this.signInWithEmailAndPassword(loginData);
    }),
    switchMap(_ => of(new GetUser())),
    catchError(error => of(new AuthError({ error: error.message })))
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new GetUser());
  });

  private signInWithEmailAndPassword(data: {
    email: string;
    password: string;
  }): Observable<firebase.auth.UserCredential> {
    console.log('PasswordLogin', data);
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
    );
  }
}
