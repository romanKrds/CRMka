import { ErrorCustomers, LoadCustomers, LoadCustomersSuccess } from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CustomersActionTypes } from '@constants/*';
import { AppStore, CustomerWithId } from '@models/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, State } from '@ngrx/store';
import { selectCurrentBusinessId } from '@selectors/*';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable()
export class CustomersEffects {

  constructor(
    private db: AngularFireDatabase,
    private actions$: Actions,
    private state: State<AppStore>
  ) { }

    @Effect()
    // V2
    loadCustomersEffect$: Observable<Action> = this.actions$.pipe(
      ofType<LoadCustomers>(CustomersActionTypes.LoadCustomers),
      switchMap(() => {
        return this.state.pipe(select(selectCurrentBusinessId));
      }),
      switchMap(currentBusiness => {
          return this.db.list('/customers', ref => ref.orderByChild('businessId').equalTo(currentBusiness))
          .snapshotChanges();
      }),
      map(customers => {
          return customers.map(customer => {
            const data = customer.payload.val();
            const id = customer.payload.key;
            return { id, ...data };
          });
      }),
      map((customers: CustomerWithId[]) => {
        return new LoadCustomersSuccess({ customers });
      }),
      catchError(errors => of(new ErrorCustomers({ errors })))
    );
}
