import { StatusesState } from '../../models/statuses-state.model';
import { statusesAdapter } from '../reducers/statuses.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectStateStatuses = createFeatureSelector<StatusesState>('statuses');


const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = statusesAdapter.getSelectors();

export const selectAllStatuses = createSelector(
  selectStateStatuses,
  selectEntities
);

const _selectAsArray = (statuses) => {

  return Object.keys(statuses).map((key) => {
    return statuses[key];
  });
};

export const selectStatusesAsArray = createSelector(
  selectAllStatuses,
  _selectAsArray
);


export const getStatusById = () => createSelector(
  selectAllStatuses,
  (services, id) => services[id]
);
