import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ServicesState } from '@models/*';
import { servicesAdapter } from '../reducers/services.reducer';

export const selectStateServices = createFeatureSelector<ServicesState>('services');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = servicesAdapter.getSelectors();

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

export const getServiceById = () => createSelector(
  selectServicesEntities,
  (services, id) => services[id]
);
