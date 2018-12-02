import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ErrorOrders, LoadOrdersSuccess, LoadOrders, AddOrders } from '@actions/*';
import { OrderActionTypes } from '@constants/*';
import { Order, AppStore } from '@models/*';
import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { Action, State, select } from '@ngrx/store';
import { selectCustomersIds } from '@selectors/*';



@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private db: AngularFireDatabase,
    private state: State<AppStore>
  ) { }

    @Effect()
  loadOrdersEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoadOrders>(OrderActionTypes.LoadOrders),
    switchMap(() => {
      const ids = this.state.pipe(select(selectCustomersIds));
      return ids;
    }),
    switchMap((ids: string[]) => from(ids)),
    mergeMap((id: string) => {
      return this.db.list('/orders', ref => ref.orderByChild('customerId').equalTo(id))
      .snapshotChanges();
    }),
    map(list => {
        return list.map(orders => {
          const data = orders.payload.val();
          const id = orders.payload.key;
          return { id, ...data };
        });
      }),
    map((orders: Order[]) => {
      return new AddOrders({ orders });
    }),
    catchError(errors => of(new ErrorOrders({ errors })))
  );

}
