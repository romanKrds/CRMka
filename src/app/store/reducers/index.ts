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
import * as fromUser from './user.reducer';

export const reducers: ActionReducerMap<AppStore> = {

  services: reducerServices,

  user: fromUser.reducer,
};


export const metaReducers: MetaReducer<AppStore>[] = !environment.production ? [] : [];
