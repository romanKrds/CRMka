import { StateServices, UserState } from '.';

// Todo check for elvis operator. Is required?
export interface AppStore {
  user: UserState;
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: any;
  services?: StateServices;
  states?: any;
}
