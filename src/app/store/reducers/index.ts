import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppStore } from 'src/app/models';
import * as fromStatuses from './statuses.reducers';
import { reducerServices } from './services.reducer';

export const reducers: ActionReducerMap<AppStore> = {
  services: reducerServices,
  statuses: fromStatuses.statusesReducers
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
