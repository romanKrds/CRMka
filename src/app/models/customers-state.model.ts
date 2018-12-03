import { Customer } from '@models/*';
import { EntityState } from '@ngrx/entity';

// export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
//         selectId: model => model.id,
//         sortComparer: (a: Customer, b: Customer): number =>
//             b.id.localeCompare(a.id)
//     });

export interface CustomersState extends EntityState<Customer> {
    errors: string[] | null;
}

// export const initialState: State = customerAdapter.getInitialState(
//     {
//         isLoading: false,
//         error: null
//     }
// );
