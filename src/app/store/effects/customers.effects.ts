import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { CustomersActionTypes, CustomersPerBusinessActionTypes } from '@constants/*';
import {
  LoadCustomersInfoSuccess,
  LoadCustomersPerBusiness,
  LoadCustomersPerBusinessSuccess,
  LoadCustomersInfo,
  LoadCustomers,
  ErrorCustomersPerBusiness,
  ErrorCustomers
} from '@actions/*';
import { AppStore, Customer} from '@models/*';

import { CommonEffectsBehavior } from './shared/common-behavior.class';

import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, switchMap, catchError } from 'rxjs/operators';
import { flatten } from 'lodash';

interface CustomersPerBusinessRaw {
  string: boolean;
}
@Injectable()
export class CustomersEffects extends CommonEffectsBehavior {

  constructor(
    private db: AngularFireDatabase,
    private store: Store<AppStore>,
    private actions$: Actions
  ) {
    super(db);
  }

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomersActionTypes.LoadCustomers),
      map((action: LoadCustomers) => new LoadCustomersPerBusiness({business: action.payload.business}))
    );

  @Effect()
  loadCustomersPerBussines$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomersPerBusinessActionTypes.LoadCustomersPerBusiness),
      mergeMap(
        (action: LoadCustomersPerBusiness) => this.db.list<CustomersPerBusinessRaw>(
          `/customersPerBusiness`,
          (ref: DatabaseReference) => ref.orderByKey().equalTo(action.payload.business)
        ).snapshotChanges()
          .pipe(
            // // If successful, dispatch success action with result
            switchMap((snapAction: SnapshotAction<CustomersPerBusinessRaw>[]) => {
              const customers = Object.keys(snapAction[0].payload.val());
              return [
                new LoadCustomersPerBusinessSuccess({customers}),
                new LoadCustomersInfo({customers})
              ];
            }),
            // If request fails, dispatch failed action
            catchError((errors) => of(new ErrorCustomersPerBusiness({errors})))
          )
      )
    );

  @Effect()
  loadCustomersInfo$: Observable<Action> = this.actions$
    .pipe(
      ofType(CustomersActionTypes.LoadCustomersInfo),
      mergeMap(
        (action: LoadCustomersInfo) =>
          this.retrieveMultipleKeys<Customer>('customers', action.payload.customers)
            .pipe(
              // If successful, dispatch success action with result
              tap((v: SnapshotAction<Customer>[][]) => console.log(v)),
              map((resp: SnapshotAction<Customer>[][]) => {
                const customers = flatten(resp).map((item: SnapshotAction<Customer>) => ({...item.payload.val(), id: item.key}));
                console.log(customers);
                return new LoadCustomersInfoSuccess({customers});
              }),
              // If request fails, dispatch failed action
              catchError((errors) => of(new ErrorCustomers({errors})))
            )
      )
    );
}

