import { StateServices } from './services-store.models';
import { StatusesState } from "./statuses-store.models";

// Todo check for elvis operator. Is required?
export interface AppStore {
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: any;
  statuses?: StatusesState;
  services?: StateServices;
}
