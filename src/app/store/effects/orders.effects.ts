import { AddOrders, ErrorOrders, LoadOrders } from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { OrderActionTypes } from '@constants/*';
import { AppStore, Order, OrderWithId } from '@models/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, State } from '@ngrx/store';
import { selectCustomersIds } from '@selectors/*';
import { from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';



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
    map((orders: OrderWithId[]) => {
      return new AddOrders({ orders });
    }),
    catchError(errors => of(new ErrorOrders({ errors })))
  );

}
