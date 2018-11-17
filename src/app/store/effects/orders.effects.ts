import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ErrorOrders, LoadOrdersSuccess } from '@actions/*';
import { OrderActionTypes } from '@constants/*';
import { Order } from '@models/*';
import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';



@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private db: AngularFireDatabase
  ) { }

  @Effect()
  loadOrders$: Observable<Action> = this.actions$.pipe(
    ofType(OrderActionTypes.LoadOrders),
    mergeMap(_ => this.db.list('/orders').snapshotChanges()),
    map(list => {
      return list.map(orders => {
        const data = orders.payload.val();
        const id = orders.payload.key;
        return { id, ...data };
      });
    }),
    map((orders: Order[]) => {
      return new LoadOrdersSuccess({ orders });
    }),
    catchError(errors => of(new ErrorOrders({ errors })))
  );

}
