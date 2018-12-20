import { businessAdapter } from '../reducers/business.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BusinessState } from '@models/*';

export const selectStateClientBusinesses = createFeatureSelector<BusinessState>('clientBusinesses');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = businessAdapter.getSelectors();

export const selectClientBusinessesIds = createSelector(
  selectStateClientBusinesses,
  selectIds
);
export const selectClientBusinessesEntities = createSelector(
  selectStateClientBusinesses,
  selectEntities
);
export const selectClientBusinessesAll = createSelector(
  selectStateClientBusinesses,
  selectAll
);
export const selectClientBusinessesTotal = createSelector(
  selectStateClientBusinesses,
  selectTotal
);

export const getBusinessById = () => createSelector(
  selectClientBusinessesEntities,
  (clientBusinesses, id) => clientBusinesses[id]
);
