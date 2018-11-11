import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppStore } from 'src/app/models/models';
import * as fromStatuses from './statuses.reducers';

export const reducers: ActionReducerMap<AppStore> = {
  statuses: fromStatuses.statusesReducers
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
