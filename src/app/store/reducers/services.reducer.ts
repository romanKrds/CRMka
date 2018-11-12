import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ServicesActions } from '../actions/services.actions';
import { ServicesActionTypes } from '../constants/services.constants';
import { Services, StateServices } from '../../models';

export const adapterServices: EntityAdapter<Services> = createEntityAdapter<Services>({});

export const initialStateServices: StateServices = adapterServices.getInitialState({
    // additional entity state properties
    errors: null
});

export function reducerServices(state = initialStateServices, action: ServicesActions): StateServices {
  switch (action.type) {
    case ServicesActionTypes.AddServices: {
      return adapterServices.addOne(action.payload.services, state);
    }

    case ServicesActionTypes.UpsertServices: {
      return adapterServices.upsertOne(action.payload.services, state);
    }

    case ServicesActionTypes.AddServicess: {
      return adapterServices.addMany(action.payload.servicess, state);
    }

    case ServicesActionTypes.UpsertServicess: {
      return adapterServices.upsertMany(action.payload.servicess, state);
    }

    case ServicesActionTypes.UpdateServices: {
      return adapterServices.updateOne(action.payload.services, state);
    }

    case ServicesActionTypes.UpdateServicess: {
      return adapterServices.updateMany(action.payload.servicess, state);
    }

    case ServicesActionTypes.DeleteServices: {
      return adapterServices.removeOne(action.payload.id, state);
    }

    case ServicesActionTypes.DeleteServicess: {
      return adapterServices.removeMany(action.payload.ids, state);
    }

    case ServicesActionTypes.LoadServicess: {
      return adapterServices.addAll(action.payload.servicess, state);
    }

    case ServicesActionTypes.ClearServicess: {
      return adapterServices.removeAll(state);
    }

    case ServicesActionTypes.ErrorServicess: {
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


