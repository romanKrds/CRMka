import { StatusesState, statusesAdapter } from "src/app/models/statuses.model";
import { statusesActionTypes } from '../constants/statuses.constants';
import { statusesActions } from '../actions/statuses.actions';

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

    default:
      return state;
  }
}