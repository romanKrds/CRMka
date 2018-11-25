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
import { curentClientReducer } from './current-client.reducer';
import { curentBusinessReducer } from './current-business.reducer';
import { reducerBusiness } from './business.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  currentClient: curentClientReducer,
  currentBusiness: curentBusinessReducer,
  services: reducerServices,
  statuses: statusesReducers,
  orders: ordersReducer,
  customers: customersReducer,
  business: reducerBusiness
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
