import { OrdersState, ServicesState, StatusesState } from '@models/*';

// Todo check for elvis operator. Is required?
export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders: OrdersState;
  customers?: any;
  statuses: StatusesState;
  services: ServicesState;
}
