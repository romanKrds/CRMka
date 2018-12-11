import { statusesAdapter } from '../reducers/statuses.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StatusesState } from '@models/*';

export const selectStateStatuses = createFeatureSelector<StatusesState>('statuses');


const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = statusesAdapter.getSelectors();

export const selectStateIds = createSelector(
  selectStateStatuses,
  selectIds
);
export const selectStatusesEntities = createSelector(
  selectStateStatuses,
  selectEntities
);

export const selectStatusesAll = createSelector(
  selectStateStatuses,
  selectAll
);
export const selectStatusesTotal = createSelector(
  selectStateStatuses,
  selectTotal
);
export const getStatusById = () => createSelector(
  selectStatusesEntities,
  (services, id) => services[id]
);
