import { StatusesState, Status } from "src/app/models/statuses.model";
import { statusesActionTypes } from '../constants/statuses.constants';
import { statusesActions } from '../actions/statuses.actions';
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const statusesAdapter: EntityAdapter<Status> = 
  createEntityAdapter<Status>();
export const initialStatusesState: StatusesState = statusesAdapter.getInitialState();

export function statusesReducers(
  state = initialStatusesState, 
  action: statusesActions): StatusesState {

  switch(action.type){
    // case statusesActionTypes.LOAD_STATUS_TYPE_BY_ID
    case statusesActionTypes.LOAD_STATUS_TYPE_BY_ID_SUCCESS:
      return statusesAdapter.addOne(action.payload, state);

    case statusesActionTypes.LOAD_STATUS_TYPE_BY_ID_ERROR:
      // ничего не добавляем т.к. пришла ошибка?
      break;

    case statusesActionTypes.LOAD_STATUSES_TYPES_SUCCESS:
      console.log(action.payload);
      return statusesAdapter.addMany(action.payload, state);

    default:
      return state;
  }
}