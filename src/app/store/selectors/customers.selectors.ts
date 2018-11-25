import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomersState } from '@models/*';
import { customersAdapter } from '../reducers/customers.reducer';

export const selectStateCustomers = createFeatureSelector<CustomersState>('customers');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = customersAdapter.getSelectors();


export const selectCustomersIds = createSelector(
    selectStateCustomers,
    selectIds
);
export const selectCustomersEntities = createSelector(
    selectStateCustomers,
    selectEntities
);
export const selectCustomersAll = createSelector(
    selectStateCustomers,
    selectAll
);
export const selectCustomersTotal = createSelector(
    selectStateCustomers,
    selectTotal
);

export const getCustomerById = () => createSelector(
    selectStateCustomers,
    (customers, id) => customers[id]
);
