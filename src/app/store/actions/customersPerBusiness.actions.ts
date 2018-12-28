import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CustomersPerBusinessActionTypes } from '@constants/*';



export class LoadCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.LoadCustomersPerBusiness;
  constructor(public payload: { business: string }) { }
}


export class LoadCustomersPerBusinessSuccess implements Action {
  readonly type = CustomersPerBusinessActionTypes.LoadCustomersPerBusinessSuccess;

  constructor(public payload: { customers: string[] }) {}
}

export class AddCustomerPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.AddCustomerPerBusiness;

  constructor(public payload: { customer: string }) {}
}

export class UpsertCustomerPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.UpsertCustomerPerBusiness;

  constructor(public payload: { customer: string }) {}
}

export class AddCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.AddCustomersPerBusiness;

  constructor(public payload: { customers: string[] }) {}
}

export class UpsertCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.UpsertCustomersPerBusiness;

  constructor(public payload: { customers: string[] }) {}
}

export class UpdateCustomerPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.UpdateCustomerPerBusiness;

  constructor(public payload: { customer: Update<string> }) {}
}

export class UpdateCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.UpdateCustomersPerBusiness;

  constructor(public payload: { customers: Update<string>[] }) {}
}

export class DeleteCustomerPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.DeleteCustomerPerBusiness;

  constructor(public payload: { id: string }) {}
}

export class DeleteCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.DeleteCustomersPerBusiness;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.ClearCustomersPerBusiness;
}

export class ErrorCustomersPerBusiness implements Action {
  readonly type = CustomersPerBusinessActionTypes.ErrorCustomersPerBusiness;

  constructor(public payload: { errors: string[] }) { }
}

export type CustomersPerBusinessActions =
 LoadCustomersPerBusiness
 | LoadCustomersPerBusinessSuccess
 | AddCustomerPerBusiness
 | UpsertCustomerPerBusiness
 | AddCustomersPerBusiness
 | UpsertCustomersPerBusiness
 | UpdateCustomerPerBusiness
 | UpdateCustomersPerBusiness
 | DeleteCustomerPerBusiness
 | DeleteCustomersPerBusiness
 | ClearCustomersPerBusiness
 | ErrorCustomersPerBusiness;
