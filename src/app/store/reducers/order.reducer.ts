import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Order, Orders } from '@models/index';
import { OrderActions } from '../actions/order.actions';
import { OrderActionTypes } from '../constants/orders.constants';



// export interface State extends EntityState<Order> {
//   // additional entities state properties
// }

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: Orders = orderAdapter.getInitialState({
  // additional entity state properties
});

export function ordersReducer(
  state = initialState,
  action: OrderActions
): Orders {
  switch (action.type) {
    case OrderActionTypes.AddOrder: {
      return orderAdapter.addOne(action.payload.order, state);
    }

    case OrderActionTypes.UpsertOrder: {
      return orderAdapter.upsertOne(action.payload.order, state);
    }

    case OrderActionTypes.AddOrders: {
      return orderAdapter.addMany(action.payload.orders, state);
    }

    case OrderActionTypes.UpsertOrders: {
      return orderAdapter.upsertMany(action.payload.orders, state);
    }

    case OrderActionTypes.UpdateOrder: {
      return orderAdapter.updateOne(action.payload.order, state);
    }

    case OrderActionTypes.UpdateOrders: {
      return orderAdapter.updateMany(action.payload.orders, state);
    }

    case OrderActionTypes.DeleteOrder: {
      return orderAdapter.removeOne(action.payload.id, state);
    }

    case OrderActionTypes.DeleteOrders: {
      return orderAdapter.removeMany(action.payload.ids, state);
    }

    case OrderActionTypes.LoadOrders: {
      return orderAdapter.addAll(action.payload.orders, state);
    }

    case OrderActionTypes.ClearOrders: {
      return orderAdapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = orderAdapter.getSelectors();
