import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Customer } from '../../models/customer.model';
import { CustomersActionTypes } from '@constants/*';



export class LoadCustomers implements Action {
  readonly type = CustomersActionTypes.LoadCustomers;
  constructor() { }
}


export class LoadCustomersSuccess implements Action {
  readonly type = CustomersActionTypes.LoadCustomersSuccess;

  constructor(public payload: { customers: Customer[] }) {}
}

export class AddCustomer implements Action {
  readonly type = CustomersActionTypes.AddCustomer;

  constructor(public payload: { customer: Customer }) {}
}

export class UpsertCustomer implements Action {
  readonly type = CustomersActionTypes.UpsertCustomer;

  constructor(public payload: { customer: Customer }) {}
}

export class AddCustomers implements Action {
  readonly type = CustomersActionTypes.AddCustomers;

  constructor(public payload: { customers: Customer[] }) {}
}

export class UpsertCustomers implements Action {
  readonly type = CustomersActionTypes.UpsertCustomers;

  constructor(public payload: { customers: Customer[] }) {}
}

export class UpdateCustomer implements Action {
  readonly type = CustomersActionTypes.UpdateCustomer;

  constructor(public payload: { customer: Update<Customer> }) {}
}

export class UpdateCustomers implements Action {
  readonly type = CustomersActionTypes.UpdateCustomers;

  constructor(public payload: { customers: Update<Customer>[] }) {}
}

export class DeleteCustomer implements Action {
  readonly type = CustomersActionTypes.DeleteCustomer;

  constructor(public payload: { id: string }) {}
}

export class DeleteCustomers implements Action {
  readonly type = CustomersActionTypes.DeleteCustomers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCustomers implements Action {
  readonly type = CustomersActionTypes.ClearCustomers;
}

export class ErrorCustomers implements Action {
  readonly type = CustomersActionTypes.ErrorCustomers;

  constructor(public payload: { errors: string[] }) { }
}

export type CustomersActions =
 LoadCustomers
 | LoadCustomersSuccess
 | AddCustomer
 | UpsertCustomer
 | AddCustomers
 | UpsertCustomers
 | UpdateCustomer
 | UpdateCustomers
 | DeleteCustomer
 | DeleteCustomers
 | ClearCustomers
 | ErrorCustomers;
