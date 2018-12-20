import { Customer } from '@models/*';
import { EntityState } from '@ngrx/entity';

export interface CustomersState extends EntityState<Customer> {
    errors: string[] | null;
}
