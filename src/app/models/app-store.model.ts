import { OrdersState, ServicesState, StatusesState, CustomersState } from '@models/*';
// Todo check for elvis operator. Is required?

export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders: OrdersState;
  customers: CustomersState;
  statuses: StatusesState;
  services: ServicesState;
}
