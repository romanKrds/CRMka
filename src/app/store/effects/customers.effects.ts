import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, catchError, map, mergeMap, tap } from 'rxjs/operators';

import { CustomersActionTypes } from '../constants/customer.constants';
import * as customersActions from '../actions/customer.actions';
import { Customer } from 'src/app/models/customer.model';
import { CustomersLoadSuccess } from '../actions/customer.actions';


@Injectable()
export class CustomersEffectsService {



    @Effect()
    loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
            ofType(CustomersActionTypes.LOAD_CUSTOMERS),
            mergeMap(() => this.db.list<Customer>('/customers').snapshotChanges().pipe(
                    // If successful, dispatch success action with result
                    map(data => {
                        return data.map(value => {
                            const dat = value.payload.val();
                            const id = value.payload.key;
                            // console.log({id, ...dat});
                            return { id, ...dat};

                        });
//                        type: CustomersActionTypes.LOAD_CUSTOMERS_SUCCESS,
//                        payload: data
                    }),
                    map((customer: Customer[]) => {
                        return new CustomersLoadSuccess({ data: customer });
                    }),
                    // If request fails, dispatch failed action
                    catchError(_ => of({
                        type: CustomersActionTypes.LOAD_CUSTOMERS_FAILED,
                        payload: []
                    })),
                    tap(data => console.log('loadCustomerEffect', data))
                )
            )
    );

    constructor(private db: AngularFireDatabase, private actions$: Actions) { }
}

