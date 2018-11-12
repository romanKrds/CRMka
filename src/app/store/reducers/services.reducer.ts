import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ServicesActions } from '../actions/services.actions';
import { ServicesActionTypes } from '../constants/services.constants';
import { Service, StateServices } from '../../models';

export const adapterServices: EntityAdapter<Service> = createEntityAdapter<Service>({});

export const initialStateServices: StateServices = adapterServices.getInitialState({
    // additional entity state properties
    errors: null
});

export function reducerServices(state = initialStateServices, action: ServicesActions): StateServices {
  switch (action.type) {
    case ServicesActionTypes.AddService: {
      return adapterServices.addOne(action.payload.service, state);
    }

    case ServicesActionTypes.UpsertService: {
      return adapterServices.upsertOne(action.payload.service, state);
    }

    case ServicesActionTypes.AddServices: {
      return adapterServices.addMany(action.payload.services, state);
    }

    case ServicesActionTypes.UpsertServices: {
      return adapterServices.upsertMany(action.payload.services, state);
    }

    case ServicesActionTypes.UpdateService: {
      return adapterServices.updateOne(action.payload.service, state);
    }

    case ServicesActionTypes.UpdateServices: {
      return adapterServices.updateMany(action.payload.services, state);
    }

    case ServicesActionTypes.DeleteService: {
      return adapterServices.removeOne(action.payload.id, state);
    }

    case ServicesActionTypes.DeleteServices: {
      return adapterServices.removeMany(action.payload.ids, state);
    }

    case ServicesActionTypes.LoadServices: {
      return adapterServices.addAll(action.payload.services, state);
    }

    case ServicesActionTypes.ClearServices: {
      return adapterServices.removeAll(state);
    }

    case ServicesActionTypes.ErrorService: {
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


