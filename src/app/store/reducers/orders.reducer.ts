import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Order, OrdersState } from '@models/index';
import { OrderActions } from '@actions/index';
import { OrderActionTypes } from '@constants/index';


export const ordersAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: OrdersState = ordersAdapter.getInitialState({
  // additional entity state properties
  errors: null
});

export function ordersReducer(
  state = initialState,
  action: OrderActions
): OrdersState {
  switch (action.type) {
    case OrderActionTypes.AddOrder: {
      return ordersAdapter.addOne(action.payload.order, state);
    }

    case OrderActionTypes.UpsertOrder: {
      return ordersAdapter.upsertOne(action.payload.order, state);
    }

    case OrderActionTypes.AddOrders: {
      return ordersAdapter.addMany(action.payload.orders, state);
    }

    case OrderActionTypes.UpsertOrders: {
      return ordersAdapter.upsertMany(action.payload.orders, state);
    }

    case OrderActionTypes.UpdateOrder: {
      return ordersAdapter.updateOne(action.payload.order, state);
    }

    case OrderActionTypes.UpdateOrders: {
      return ordersAdapter.updateMany(action.payload.orders, state);
    }

    case OrderActionTypes.DeleteOrder: {
      return ordersAdapter.removeOne(action.payload.id, state);
    }

    case OrderActionTypes.DeleteOrders: {
      return ordersAdapter.removeMany(action.payload.ids, state);
    }

    case OrderActionTypes.LoadOrdersSuccess: {
      return ordersAdapter.addAll(action.payload.orders, state);
    }

    case OrderActionTypes.ClearOrders: {
      return ordersAdapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
