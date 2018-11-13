import { StatusesState } from "./statuses.model";
import { StateServices } from './services-store.models';

// Todo check for elvis operator. Is required?
export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: any;
  statuses?: StatusesState;
  services?: StateServices;
}
