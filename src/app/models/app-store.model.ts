import { StateServices } from './services-store.models';
import { StatusesState } from "./statuses-store.models";
import { Orders } from '@models/index';


// Todo check for elvis operator. Is required?
export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders: Orders;
  customers?: any;
  statuses?: StatusesState;
  services?: StateServices;
}
