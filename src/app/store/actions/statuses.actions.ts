import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Status } from '@models/*';
import { StatusesActionTypes } from '@constants/*';

export class LoadStatuses implements Action {
  readonly type = StatusesActionTypes.LoadStatuses;
}

export class LoadStatusesSuccess implements Action {
  readonly type = StatusesActionTypes.LoadStatusesSuccess;

  constructor(public payload: { statuses: Status[] }) {}
}

export class AddStatus implements Action {
  readonly type = StatusesActionTypes.AddStatus;

  constructor(public payload: { status: Status }) {}
}

export class UpsertStatus implements Action {
  readonly type = StatusesActionTypes.UpsertStatus;

  constructor(public payload: { status: Status }) {}
}

export class AddStatuss implements Action {
  readonly type = StatusesActionTypes.AddStatuss;

  constructor(public payload: { statuss: Status[] }) {}
}

export class UpsertStatuss implements Action {
  readonly type = StatusesActionTypes.UpsertStatuss;

  constructor(public payload: { statuss: Status[] }) {}
}

export class UpdateStatus implements Action {
  readonly type = StatusesActionTypes.UpdateStatus;

  constructor(public payload: { status: Update<Status> }) {}
}

export class UpdateStatuss implements Action {
  readonly type = StatusesActionTypes.UpdateStatuss;

  constructor(public payload: { statuss: Update<Status>[] }) {}
}

export class DeleteStatus implements Action {
  readonly type = StatusesActionTypes.DeleteStatus;

  constructor(public payload: { id: string }) {}
}

export class DeleteStatuss implements Action {
  readonly type = StatusesActionTypes.DeleteStatuss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearStatuss implements Action {
  readonly type = StatusesActionTypes.ClearStatuss;
}

export class ErrorStatuses implements Action {
  readonly type = StatusesActionTypes.ErrorStatuses;

  constructor(public payload: { errors: string[] }) {}
}

export type StatusActions =
LoadStatuses
 | LoadStatusesSuccess
 | AddStatus
 | UpsertStatus
 | AddStatuss
 | UpsertStatuss
 | UpdateStatus
 | UpdateStatuss
 | DeleteStatus
 | DeleteStatuss
 | ClearStatuss
 | ErrorStatuses;
