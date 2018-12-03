import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppStore } from 'src/app/models';
import { environment } from '../../../environments/environment';
import { reducerBusiness } from './business.reducer';
import { currentBusinessReducer } from './current-business.reducer';
import { currentClientReducer } from './current-client.reducer';
import { customersReducer } from './customers.reducer';
import { ordersReducer } from './orders.reducer';
import { reducerServices } from './services.reducer';
import { statusesReducers } from './statuses.reducer';


export const reducers: ActionReducerMap<AppStore> = {
  currentClient: currentClientReducer,
  currentBusiness: currentBusinessReducer,
  services: reducerServices,
  statuses: statusesReducers,
  orders: ordersReducer,
  customers: customersReducer,
  clientBusinesses: reducerBusiness
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
