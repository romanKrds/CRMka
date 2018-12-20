import { ErrorBusiness, LoadBusinessesSuccess } from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { BusinessActionTypes } from '@constants/*';
import { Business } from '@models/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable()
export class BusinessEffects {

  constructor(private actions$: Actions, private db: AngularFireDatabase, private auth: AngularFireAuth) {}

  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType(BusinessActionTypes.LoadBusinesses),
    switchMap(_ => this.db.list<Business>('/business', ref => ref.orderByChild('clientId')
      .equalTo(this.auth.auth.currentUser.uid))
      .snapshotChanges()),
    map(list => {
      return list.map(service => {
        const data = service.payload.val();
        const id = service.payload.key;
        return { id, ...data };
      });
    }),
    map((businesses: Business[]) => {
      return new LoadBusinessesSuccess({ businesses });
    }),
    catchError(errors => of(new ErrorBusiness({ errors })))
  );

}
