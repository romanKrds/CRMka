import { Order } from 'src/app/models/order.model';
import { Action } from '@ngrx/store';
import { ordersActionTypes } from '../constants/order.constants';

export class OrdersLoad implements Action {
  readonly type: ordersActionTypes.LOAD;
}

export class OrdersLoadSuccess implements Action {
  readonly type: ordersActionTypes.LOAD_SUCCESS;
  constructor(
    public payload: Order[]
  ) { }
}

export class OrdersLoadFiled implements Action {
  readonly type: ordersActionTypes.LOAD_FILED;
}

export type ordersActionUnion = OrdersLoadSuccess | OrdersLoadFiled;
