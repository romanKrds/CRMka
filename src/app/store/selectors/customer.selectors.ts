import { createSelector, createFeatureSelector } from '@ngrx/store';
import { customerAdapter, State } from '@models/customer.state';

export const selectStateCustomers = createFeatureSelector<State>('customers');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = customerAdapter.getSelectors();


export const selectServicesIds = createSelector(
    selectStateCustomers,
    selectIds
);
export const selectServicesEntities = createSelector(
    selectStateCustomers,
    selectEntities
);
export const selectServicesAll = createSelector(
    selectStateCustomers,
    selectAll
);
export const selectServicesTotal = createSelector(
    selectStateCustomers,
    selectTotal
);
