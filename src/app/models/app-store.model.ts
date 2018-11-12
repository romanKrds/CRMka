import { StateServices } from './services-store.models';
import { State } from '../store/reducers/user.reducer';

// Todo check for elvis operator. Is required?
export interface AppStore {
  user: State;
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: any;
  services?: StateServices;
  states?: any;
}
