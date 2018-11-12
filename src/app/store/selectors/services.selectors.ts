import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StateServices } from '../../models';
import { adapterServices } from '../reducers/services.reducer';

export const selectStateServices = createFeatureSelector<StateServices>('services');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapterServices.getSelectors();

export const selectServicesIds = createSelector(
  selectStateServices,
  selectIds
);
export const selectServicesEntities = createSelector(
  selectStateServices,
  selectEntities
);
export const selectServicesAll = createSelector(
  selectStateServices,
  selectAll
);
export const selectServicesTotal = createSelector(
  selectStateServices,
  selectTotal
);
