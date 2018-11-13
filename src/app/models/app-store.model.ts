import { Orders } from './orders.model';

// Todo check for elvis operator. Is required?
export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders?: Orders;
  customers?: any;
  services?: any;
  states?: any;
}
