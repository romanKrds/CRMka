import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Order } from '@models/*';
import { OrderActionTypes } from '@constants/*';


export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LoadOrders;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrdersSuccess;

  constructor(public payload: { orders: Order[] }) { }
}

export class AddOrder implements Action {
  readonly type = OrderActionTypes.AddOrder;

  constructor(public payload: { order: Order }) { }
}

export class UpsertOrder implements Action {
  readonly type = OrderActionTypes.UpsertOrder;

  constructor(public payload: { order: Order }) { }
}

export class AddOrders implements Action {
  readonly type = OrderActionTypes.AddOrders;

  constructor(public payload: { orders: Order[] }) { }
}

export class UpsertOrders implements Action {
  readonly type = OrderActionTypes.UpsertOrders;

  constructor(public payload: { orders: Order[] }) { }
}

export class UpdateOrder implements Action {
  readonly type = OrderActionTypes.UpdateOrder;

  constructor(public payload: { order: Update<Order> }) { }
}

export class UpdateOrders implements Action {
  readonly type = OrderActionTypes.UpdateOrders;

  constructor(public payload: { orders: Update<Order>[] }) { }
}

export class DeleteOrder implements Action {
  readonly type = OrderActionTypes.DeleteOrder;

  constructor(public payload: { id: string }) { }
}

export class DeleteOrders implements Action {
  readonly type = OrderActionTypes.DeleteOrders;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearOrders implements Action {
  readonly type = OrderActionTypes.ClearOrders;
}

export class ErrorOrders implements Action {
  readonly type = OrderActionTypes.ErrorOrders;

  constructor(public payload: { errors: string[] }) {}
}


export type OrderActions =
LoadOrders
  | LoadOrdersSuccess
  | AddOrder
  | UpsertOrder
  | AddOrders
  | UpsertOrders
  | UpdateOrder
  | UpdateOrders
  | DeleteOrder
  | DeleteOrders
  | ClearOrders
  | ErrorOrders;
