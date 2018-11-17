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
import { reducerUser } from './user.reducer';
import { statusesReducers } from './statuses.reducer';
import { ordersReducer } from './orders.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  services: reducerServices,

  user: reducerUser,
  statuses: statusesReducers,
  orders: ordersReducer,
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
