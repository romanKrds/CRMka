import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Customer } from './customer.model';

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
        selectId: model => model.id,
        sortComparer: (a: Customer, b: Customer): number =>
            b.id.localeCompare(a.id)
    });

export interface State extends EntityState<Customer> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = customerAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);
