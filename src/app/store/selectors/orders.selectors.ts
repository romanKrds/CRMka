import { ordersAdapter } from '../reducers/orders.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OrdersState } from '@models/*';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ordersAdapter.getSelectors();

export const selectStateOrders = createFeatureSelector<OrdersState>('orders');

export const selectIdsOrders = createSelector(
  selectStateOrders,
  selectIds
);
export const selectEntitiesOrders = createSelector(
  selectStateOrders,
  selectEntities
);
export const selectAllOrders = createSelector(
  selectStateOrders,
  selectAll
);
export const selectTotalOrders = createSelector(
  selectStateOrders,
  selectTotal
);

export const getOrderById = () => createSelector(
  selectEntitiesOrders,
  // selectStateOrders,
  // selectEntities,
  (orders, orderId) => orders[orderId]
);
