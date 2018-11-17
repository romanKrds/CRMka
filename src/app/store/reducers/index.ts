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

export const reducers: ActionReducerMap<AppStore> = {
  services: reducerServices,
  statuses: statusesReducers,
  orders: ordersReducer,
  customers: customersReducer
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
