import { Action } from "@ngrx/store";
import { statusesActionTypes } from "../constants/statuses.constants";
import { Status } from "src/app/models/statuses.model";


export class getStatusById implements Action {
  readonly type = statusesActionTypes.LOAD_STATUS_TYPE_BY_ID;
  constructor(public payload: string) {}
}

export class getStatusByIdSuccess implements Action {
  readonly type = statusesActionTypes.LOAD_STATUS_TYPE_BY_ID_SUCCESS;
  constructor(public payload: Status) {}
}

// todo: define payload type for error
export class getStatusByIdError implements Action {
  readonly type = statusesActionTypes.LOAD_STATUS_TYPE_BY_ID_ERROR;
  constructor(public payload: any) {}
}

export class getStatuses implements Action {
  readonly type = statusesActionTypes.LOAD_STATUSES_TYPES;
  constructor() {}
}

export class getStatusesSuccess implements Action {
  readonly type = statusesActionTypes.LOAD_STATUSES_TYPES_SUCCESS;
  constructor(public payload: any) {}
}

export class getStatusesError implements Action {
  readonly type = statusesActionTypes.LOAD_STATUSES_TYPES_ERROR;
  constructor() {}
}

export type statusesActions = 
  getStatusById         |
  getStatusByIdSuccess  |
  getStatusByIdError    |
  getStatusesSuccess    |
  getStatusesError;
