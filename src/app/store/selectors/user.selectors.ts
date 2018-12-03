import { UserState } from '@models/*';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectStateUser = createFeatureSelector<UserState>('currentClient');

export const selectUserUid = createSelector(
  selectStateUser,
  (state: UserState) => state.uid
);
