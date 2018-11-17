import { OrdersState, ServicesState, UserState, StatusesState } from '@models/*';

// Todo check for elvis operator. Is required?
export interface AppStore {
  user: UserState;
  currentClient?: string;
  currentBusiness?: string;
  orders: OrdersState;
  customers?: any;
  statuses: StatusesState;
  services: ServicesState;
}
