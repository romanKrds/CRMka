import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { OrderReducer } from './order.reduser';
import { AppStore } from 'src/app/models';
import { reducerServices } from './services.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  orders: OrderReducer,
  services: reducerServices,
};





export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
