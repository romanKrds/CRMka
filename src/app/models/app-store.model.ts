import {
  Business,
  OrdersState,
  ServicesState,
  StatusesState,
  CustomersState,
  UserState,
  BusinessState
} from '@models/*';
// Todo check for elvis operator. Is required?

export interface AppStore {
  currentClient: UserState;
  currentBusiness: Business;
  orders: OrdersState;
  customers: CustomersState;
  statuses: StatusesState;
  services: ServicesState;
  clientBusinesses: BusinessState;
}
