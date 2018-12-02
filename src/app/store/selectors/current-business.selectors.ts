import { CurrentBusinessState } from '@models/*';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectStateCurrentBusiness = createFeatureSelector<CurrentBusinessState>('currentBusiness');

export const selectCurrentBusinessId = createSelector(
  selectStateCurrentBusiness,
  (state: CurrentBusinessState) => state.id
);
