import { StateServices } from './services-store.models';
import { StateUser } from '../store/reducers/user.reducer';

// Todo check for elvis operator. Is required?
export interface AppStore {
  user: StateUser;
  currentClient?: string;
  currentBusiness?: string;
  orders?: any;
  customers?: any;
  services?: StateServices;
  states?: any;
}
