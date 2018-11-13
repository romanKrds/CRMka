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
import { customersReducer } from './customers.redusers';

export const reducers: ActionReducerMap<AppStore> = {

  services: reducerServices,
  customers: customersReducer
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
