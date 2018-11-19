import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { UserState } from '@models/*';

export const selectStateUser = createFeatureSelector<UserState>('user');

export const selectUserUid = createSelector(
  selectStateUser,
  (state: UserState) => state.uid
);
