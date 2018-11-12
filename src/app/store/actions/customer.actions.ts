import { Action } from '@ngrx/store';
import { CustomersActionTypes } from '../constants/customer.constants';
import { Customer } from 'src/app/models/customer.model';

export class CustomersLoad implements Action {
    readonly type = CustomersActionTypes.LOAD_CUSTOMERS;

    constructor() {

    }

}

export class CustomersLoadSuccess implements Action {
    readonly type = CustomersActionTypes.LOAD_CUSTOMERS_SUCCESS;

    constructor(public payload: {data: Customer[]}) {

    }
}
export class CustomersLoadFailed implements Action {
    readonly type = CustomersActionTypes.LOAD_CUSTOMERS_FAILED;

    constructor(public payload: {error: string}) {

    }
}


export type CustomersActionsUnion =
    | CustomersLoad
    | CustomersLoadSuccess
    | CustomersLoadFailed;
