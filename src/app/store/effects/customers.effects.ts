import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, State, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';

import { CustomersActionTypes } from '@constants/*';
import { LoadCustomersSuccess, ErrorCustomers, AddCustomer } from '@actions/*';
import { Customer, AppStore } from '@models/*';

@Injectable()
export class CustomersEffects {
  private currentBusiness: string;

  constructor(
    private db: AngularFireDatabase,
    private actions$: Actions,
    private state: State<AppStore>
  ) {
    this.state
      .pipe(select('currentBusiness'))
      .subscribe(val => (this.currentBusiness = val));
  }

  // @Effect()
  // // V1
  // loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType(CustomersActionTypes.LoadCustomers),
  //   switchMap(() => {
  //     return this.db
  //     // .object('/')
  //       .object('/customersPerBusiness/' + this.currentBusiness)
  //       .snapshotChanges();
  //   }),
  //   mergeMap(snapshot => {
  //     // console.log('snapshot', snapshot);
  //     console.log('snapshot', snapshot.payload.val());
  //     return from(Object.keys(snapshot.payload.val()));
  //     // return of(snapshot.payload.val());
  //   }),
  //   mergeMap((data: string) => {
  //     console.log('data', data);
  //       return this.db.list('/customers', ref => ref.orderByKey().equalTo(data))
  //       .snapshotChanges();
  //   }),
  //   map(customers => {
  //     console.log('list', customers[0]);
  //       // return customers.map(customer => {
  //         const data = customers[0].payload.val();
  //         const id = customers[0].payload.key;
  //         return { id, ...data };
  //       // });
  //   }),
  //   map((customer: Customer) => {
  //     console.log('DISPATCH', customer);
  //     return new AddCustomer({ customer });
  //   }),
  //   catchError(errors => of(new ErrorCustomers({ errors })))
  // );

    @Effect()
    // V2
    loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
      ofType(CustomersActionTypes.LoadCustomers),
      switchMap(_ => {
          return this.db.list('/customers', ref => ref.orderByChild('businessId').equalTo(this.currentBusiness))
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
}
