import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, merge, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ordersActionTypes } from '../constants/order.constants';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from 'src/app/models/order.model';
import { OrdersLoadSuccess, OrdersLoadFiled } from '../actions/order.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private db: AngularFireDatabase
  ) { }

  @Effect()
  orders$: Observable<Action> = this.actions$.pipe(
    ofType(ordersActionTypes.LOAD),
    mergeMap(() =>
      this.db.list('/orders').valueChanges().pipe(
        map((orders: Order[]) => new OrdersLoadSuccess(orders)),
        catchError(() => of(new OrdersLoadFiled()))
      )
    )
  );
}
