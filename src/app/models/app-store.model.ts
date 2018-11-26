import { OrdersState, ServicesState, StatusesState, CustomersState, UserState } from '@models/*';
import { BusinessState } from './business-state.models';
// Todo check for elvis operator. Is required?

export interface AppStore {
  currentClient: UserState;
  currentBusiness?: string;
  orders: OrdersState;
  customers: CustomersState;
  statuses: StatusesState;
  services: ServicesState;
  clientBusinesses: BusinessState;
}
