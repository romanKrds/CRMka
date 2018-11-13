import { ordersActionUnion } from '../actions/order.actions';
import { ordersActionTypes } from '../constants/order.constants';
import { Orders } from 'src/app/models/orders.model';

const initiaState: Orders = {
  orders: []
};

export function OrderReducer(state: Orders = initiaState, action: ordersActionUnion) {
 console.log(action);
 
  switch (action.type) {
    case ordersActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        orders: action.payload
      };
    case ordersActionTypes.LOAD_FILED:
      return state;
    default: return state;
  }
}
