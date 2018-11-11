import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Services } from '../../models/services.model';
import { ServicesActionTypes } from '../constants/services.constants';

export class GetServices implements Action {
  readonly type = ServicesActionTypes.GetServices;
  constructor() { }
}

export class LoadServicess implements Action {
  readonly type = ServicesActionTypes.LoadServicess;

  constructor(public payload: { servicess: Services[] }) {}
}

export class AddServices implements Action {
  readonly type = ServicesActionTypes.AddServices;

  constructor(public payload: { services: Services }) {}
}

export class UpsertServices implements Action {
  readonly type = ServicesActionTypes.UpsertServices;

  constructor(public payload: { services: Services }) {}
}

export class AddServicess implements Action {
  readonly type = ServicesActionTypes.AddServicess;

  constructor(public payload: { servicess: Services[] }) {}
}

export class UpsertServicess implements Action {
  readonly type = ServicesActionTypes.UpsertServicess;

  constructor(public payload: { servicess: Services[] }) {}
}

export class UpdateServices implements Action {
  readonly type = ServicesActionTypes.UpdateServices;

  constructor(public payload: { services: Update<Services> }) {}
}

export class UpdateServicess implements Action {
  readonly type = ServicesActionTypes.UpdateServicess;

  constructor(public payload: { servicess: Update<Services>[] }) {}
}

export class DeleteServices implements Action {
  readonly type = ServicesActionTypes.DeleteServices;

  constructor(public payload: { id: string }) {}
}

export class DeleteServicess implements Action {
  readonly type = ServicesActionTypes.DeleteServicess;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearServicess implements Action {
  readonly type = ServicesActionTypes.ClearServicess;
}

export type ServicesActions =
  | GetServices
  | LoadServicess
  | AddServices
  | UpsertServices
  | AddServicess
  | UpsertServicess
  | UpdateServices
  | UpdateServicess
  | DeleteServices
  | DeleteServicess
  | ClearServicess;
