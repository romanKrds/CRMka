import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppStore } from 'src/app/models/models';

export const reducers: ActionReducerMap<AppStore> = {

};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
