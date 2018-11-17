import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Status, StatusesState} from '@models/*';
import { StatusesActionTypes } from '@constants/*';
import { StatusActions } from '@actions/*';

export const statusesAdapter: EntityAdapter<Status> = createEntityAdapter<Status>();

export const statusesInitialState: StatusesState = statusesAdapter.getInitialState({
  // additional entity state properties
  errors: null
});

export function statusesReducers(
  state = statusesInitialState,
  action: StatusActions
): StatusesState {
  switch (action.type) {
    case StatusesActionTypes.AddStatus: {
      return statusesAdapter.addOne(action.payload.status, state);
    }

    case StatusesActionTypes.UpsertStatus: {
      return statusesAdapter.upsertOne(action.payload.status, state);
    }

    case StatusesActionTypes.AddStatuss: {
      return statusesAdapter.addMany(action.payload.statuss, state);
    }

    case StatusesActionTypes.UpsertStatuss: {
      return statusesAdapter.upsertMany(action.payload.statuss, state);
    }

    case StatusesActionTypes.UpdateStatus: {
      return statusesAdapter.updateOne(action.payload.status, state);
    }

    case StatusesActionTypes.UpdateStatuss: {
      return statusesAdapter.updateMany(action.payload.statuss, state);
    }

    case StatusesActionTypes.DeleteStatus: {
      return statusesAdapter.removeOne(action.payload.id, state);
    }

    case StatusesActionTypes.DeleteStatuss: {
      return statusesAdapter.removeMany(action.payload.ids, state);
    }

    case StatusesActionTypes.LoadStatusesSuccess: {
      return statusesAdapter.addAll(action.payload.statuses, state);
    }

    case StatusesActionTypes.ClearStatuss: {
      return statusesAdapter.removeAll(state);
    }

    case StatusesActionTypes.ErrorStatuses: {
      return {
        ...state,
        errors: [...state.errors, ...action.payload.errors]
      };
    }

    default: {
      return state;
    }
  }
}

