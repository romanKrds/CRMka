import { StateServices } from './services-store.models';

// Todo check for elvis operator. Is required?
import * as customerStoreState from './customer.state';

export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: customerStoreState.State;
  services?: StateServices;
  states?: any;
}
