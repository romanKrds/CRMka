import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppStore } from 'src/app/models/models';
import { OrderReducer } from './order.reduser';

export const reducers: ActionReducerMap<AppStore> = {
  orders: OrderReducer,
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
