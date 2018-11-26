import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Business } from '@models/*';
import { BusinessActionTypes } from '@constants/*';

export class LoadBusiness implements Action {
  readonly type = BusinessActionTypes.LoadBusinesses;
}

export class LoadBusinessesSuccess implements Action {
  readonly type = BusinessActionTypes.LoadBusinessSuccess;

  constructor(public payload: { businesses: Business[] }) {}
}

export class AddBusiness implements Action {
  readonly type = BusinessActionTypes.AddBusiness;

  constructor(public payload: { business: Business }) {}
}

export class UpsertBusiness implements Action {
  readonly type = BusinessActionTypes.UpsertBusiness;

  constructor(public payload: { business: Business }) {}
}

export class AddBusinesses implements Action {
  readonly type = BusinessActionTypes.AddBusinesses;

  constructor(public payload: { businesses: Business[] }) {}
}

export class UpsertBusinesses implements Action {
  readonly type = BusinessActionTypes.UpsertBusinesses;

  constructor(public payload: { businesses: Business[] }) {}
}

export class UpdateBusiness implements Action {
  readonly type = BusinessActionTypes.UpdateBusiness;

  constructor(public payload: { business: Update<Business> }) {}
}

export class UpdateBusinesses implements Action {
  readonly type = BusinessActionTypes.UpdateBusinesses;

  constructor(public payload: { businesses: Update<Business>[] }) {}
}

export class DeleteBusiness implements Action {
  readonly type = BusinessActionTypes.DeleteBusiness;

  constructor(public payload: { id: string }) {}
}

export class DeleteBusinesses implements Action {
  readonly type = BusinessActionTypes.DeleteBusinesses;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearBusinesses implements Action {
  readonly type = BusinessActionTypes.ClearBusinesses;
}

export class ErrorBusiness implements Action {
  readonly type = BusinessActionTypes.ErrorBusiness;
  constructor(public payload: { errors: string[] }) {}
}

export type BusinessActions =
  | LoadBusiness
  | LoadBusinessesSuccess
  | AddBusiness
  | UpsertBusiness
  | AddBusinesses
  | UpsertBusinesses
  | UpdateBusiness
  | UpdateBusinesses
  | DeleteBusiness
  | DeleteBusinesses
  | ClearBusinesses
  | ErrorBusiness;
