import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, switchMap, catchError } from 'rxjs/operators';

import { CustomersActionTypes } from '@constants/*';
import { LoadCustomersSuccess, ErrorCustomers } from '@actions/*';
import { Customer, AppStore } from '@models/*';
import { DatabaseReference } from '@angular/fire/database/interfaces';
// import { CustomersLoadSuccess } from '../actions/customer.actions';


@Injectable()
export class CustomersEffects {

  private business: string;

  constructor(
    private db: AngularFireDatabase,
    private store: Store<AppStore>,
    private actions$: Actions
  ) {
    this.store.pipe(
      select('currentBusiness')
    )
    .subscribe((value: string) => this.business = value);
  }

  @Effect()
  loadCustomersPerBussines$: Observable<Action> = this.actions$.pipe(
    ofType(CustomersActionTypes.LoadCustomers),
    mergeMap(
      () => this.db.list<any>(`/customersPerBusiness`, (ref: DatabaseReference) =>
      ref.orderByKey().equalTo(this.business)).snapshotChanges().pipe(
        // If successful, dispatch success action with result
        tap(value => value.map(item => console.log(item.payload.val()))),
        map((customer: any[]) => {
          console.log(customer);
          return new LoadCustomersSuccess({ customers: customer });
        }),
      )
    )
  );

  @Effect()
    // by leobaltazor
    loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
      ofType(CustomersActionTypes.LoadCustomers),
      switchMap(_ => {
          return this.db.list('/customers', ref => ref.orderByChild('businessId').equalTo(this.business))
          .snapshotChanges();
      }),
      map(customers => {
        // console.log('list', customers);
          return customers.map(customer => {
            const data = customer.payload.val();
            const id = customer.payload.key;
            return { id, ...data };
          });
      }),
      map((customers: Customer[]) => {
        // console.log('DISPATCH', customers);
        return new LoadCustomersSuccess({ customers });
      }),
      catchError(errors => of(new ErrorCustomers({ errors })))
    );

  // @Effect()
  // loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType(CustomersActionTypes.LoadCustomers),
  //   mergeMap(
  //     () => this.db.list<Customer>('/customers').snapshotChanges().pipe(
  //       // If successful, dispatch success action with result
  //       map(data => {
  //         return data.map(value => {
  //           const dat = value.payload.val();
  //           const id = value.payload.key;
  //           return { id, ...dat };
  //         });
  //       }),
  //       map((customer: Customer[]) => {
  //         return new LoadCustomersSuccess({ customers: customer });
  //       }),
  //     )
  //   )
  // );

  // (ref: DatabaseReference) =>
  //       ref.orderByChild('size').equalTo(this.business)
}

