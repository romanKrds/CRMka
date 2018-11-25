import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { BusinessActionTypes } from '@constants/*';
import { Business } from '@models/*';
import { ErrorBusiness, LoadBusinessesSuccess } from '@actions/*';


@Injectable()
export class BusinessEffects {
  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType(BusinessActionTypes.LoadBusinesses),
    mergeMap(_ => this.db.list<Business>('/business').snapshotChanges()),
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

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}
