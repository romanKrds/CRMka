import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of, defer } from 'rxjs';
import { catchError, map, switchMap, mergeMap, tap, pluck } from 'rxjs/operators';
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
  LoadUserData,
  LoadStatuses,
  LoadOrders,
  LoadCustomers,
  LoadBusiness,
  ClearOrders,
  ClearServices,
  ClearCustomers,
  ClearBusinesses,
  ClearStatuses
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
        return from([
          new Authenticated({ user }),
          new LoadStatuses(),
          new LoadOrders(),
          new LoadServices(),
          new LoadCustomers(),
          new LoadBusiness()
        ]);
      } else {
        // this.router.navigate(['']);
        return from([
          new NotAuthenticated(),
          new ClearStatuses(),
          new ClearOrders(),
          new ClearServices(),
          new ClearCustomers(),
          new ClearBusinesses()
        ]);
      }
    }),
    catchError(err => of(new AuthError({ error: err.message })))
  );

  @Effect({dispatch: false})
  authenticated$ = this.actions$.pipe(
    ofType<Authenticated>(UserActionTypes.Authenticated),
    tap(_ => this.router.navigate(['base'])),
    catchError(err => {
      console.log('authenticatedError', err);
      return err;
    })
  );
  @Effect({dispatch: false})
  notAuthenticated$ = this.actions$.pipe((
    ofType<NotAuthenticated>(UserActionTypes.NotAuthenticated),
    tap(_ => {
      this.router.navigate(['login']);
    }),
    catchError(err => {
      console.log('notAuthenticatedError', err);
      return err;
    })
  ));

  @Effect({dispatch: false})
  loginPassword = this.actions$.pipe(
    ofType<PasswordLogin>(UserActionTypes.EmailPasswordLogin),
    pluck('payload'),
    tap(loginData => {
      return this.signInWithEmailAndPassword(loginData);
    }),
    catchError(err => {
      return of(new AuthError({ error: err.message }));
  }));

  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.Logout),
    map((action: Logout) => {
      return action.payload;
    }),
    switchMap(_ => {
      return of(this.afAuth.auth.signOut());
    }),
    map(_ => {
      return new NotAuthenticated();
    }),
    catchError(err => {
      return of(new AuthError({ error: err.message }));
  })
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
