import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomersState } from '@models/*';
import { customersAdapter } from '../reducers/customers.reducer';

export const selectStateCustomers = createFeatureSelector<CustomersState>('customers');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = customersAdapter.getSelectors();


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
