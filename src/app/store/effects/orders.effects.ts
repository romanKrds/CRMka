import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OrderActionTypes } from '../constants/orders.constants';
import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { LoadOrders } from '../actions/order.actions';
import { Order } from '@models/index';


@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private db: AngularFireDatabase
  ) { }

  @Effect()
  loadOrders$: Observable<Action> = this.actions$.pipe(
    ofType(OrderActionTypes.GetOrders),
    mergeMap(_ => this.db.list('/orders').snapshotChanges()),
    map(list => {
      return list.map(orders => {
        const data = orders.payload.val();
        const id = orders.payload.key;
        return { id, ...data };
      });
    }),
    map((orders: Order[]) => {
      return new LoadOrders({ orders });
    }),
  );

}
