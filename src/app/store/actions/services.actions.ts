import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Service } from '@models/index';
import { ServicesActionTypes } from '@constants/index';

export class LoadServices implements Action {
  readonly type = ServicesActionTypes.LoadServices;
  constructor() {}
}

export class LoadServicesSuccess implements Action {
  readonly type = ServicesActionTypes.LoadServicesSuccess;

  constructor(public payload: { services: Service[] }) {}
}

export class AddService implements Action {
  readonly type = ServicesActionTypes.AddService;

  constructor(public payload: { service: Service }) {}
}

export class UpsertService implements Action {
  readonly type = ServicesActionTypes.UpsertService;

  constructor(public payload: { service: Service }) {}
}

export class AddServices implements Action {
  readonly type = ServicesActionTypes.AddServices;

  constructor(public payload: { services: Service[] }) {}
}

export class UpsertServices implements Action {
  readonly type = ServicesActionTypes.UpsertServices;

  constructor(public payload: { services: Service[] }) {}
}

export class UpdateService implements Action {
  readonly type = ServicesActionTypes.UpdateService;

  constructor(public payload: { service: Update<Service> }) {}
}

export class UpdateServices implements Action {
  readonly type = ServicesActionTypes.UpdateServices;

  constructor(public payload: { services: Update<Service>[] }) {}
}

export class DeleteService implements Action {
  readonly type = ServicesActionTypes.DeleteService;

  constructor(public payload: { id: string }) {}
}

export class DeleteServices implements Action {
  readonly type = ServicesActionTypes.DeleteServices;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearServices implements Action {
  readonly type = ServicesActionTypes.ClearServices;
}

export class ErrorService implements Action {
  readonly type = ServicesActionTypes.ErrorService;

  constructor(public payload: { errors: string[] }) {}
}

export type ServicesActions =
  | LoadServices
  | LoadServicesSuccess
  | AddService
  | UpsertService
  | AddServices
  | UpsertServices
  | UpdateService
  | UpdateServices
  | DeleteService
  | DeleteServices
  | ClearServices
  | ErrorService;
