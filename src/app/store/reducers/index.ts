import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppStore } from 'src/app/models';
import { reducerServices } from './services.reducer';

import { statusesReducers } from './statuses.reducer';
import { ordersReducer } from './orders.reducer';
import { customersReducer } from './customers.reducer';
import { currentClientReducer } from './current-client.reducer';
import { currentBusinessReducer } from './current-business.reducer';
import { reducerBusiness } from './business.reducer';

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
