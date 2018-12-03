import { OrdersState } from '@models/*';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ordersAdapter } from '../reducers/orders.reducer';


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

export const selectCurrentOrder = createSelector (
  selectStateOrders,
  (orderState) => orderState.currentOrder,
);

export const getOrderById = () => createSelector(
  selectEntitiesOrders,
  (orders, orderId) => orders[orderId]
);
