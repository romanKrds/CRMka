import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ServicesActions } from '@actions/*';
import { ServicesActionTypes } from '@constants/*';
import { Service, ServicesState } from '@models/*';

export const servicesAdapter: EntityAdapter<Service> = createEntityAdapter<Service>({});

export const initialStateServices: ServicesState = servicesAdapter.getInitialState({
    // additional entity state properties
    errors: null
});

export function reducerServices(state = initialStateServices, action: ServicesActions): ServicesState {
  switch (action.type) {
    case ServicesActionTypes.AddService: {
      return servicesAdapter.addOne(action.payload.service, state);
    }

    case ServicesActionTypes.UpsertService: {
      return servicesAdapter.upsertOne(action.payload.service, state);
    }

    case ServicesActionTypes.AddServices: {
      return servicesAdapter.addMany(action.payload.services, state);
    }

    case ServicesActionTypes.UpsertServices: {
      return servicesAdapter.upsertMany(action.payload.services, state);
    }

    case ServicesActionTypes.UpdateService: {
      return servicesAdapter.updateOne(action.payload.service, state);
    }

    case ServicesActionTypes.UpdateServices: {
      return servicesAdapter.updateMany(action.payload.services, state);
    }

    case ServicesActionTypes.DeleteService: {
      return servicesAdapter.removeOne(action.payload.id, state);
    }

    case ServicesActionTypes.DeleteServices: {
      return servicesAdapter.removeMany(action.payload.ids, state);
    }

    case ServicesActionTypes.LoadServicesSuccess: {
      return servicesAdapter.addAll(action.payload.services, state);
    }

    case ServicesActionTypes.ClearServices: {
      return servicesAdapter.removeAll(state);
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


