import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Business } from '../../models/business.model';
import { BusinessActions } from '@actions/*';
import { BusinessActionTypes } from '@constants/*';
import { BusinessState } from '@models/*';

export const businessAdapter: EntityAdapter<Business> = createEntityAdapter<Business>();

export const initialBusinessState: BusinessState = businessAdapter.getInitialState({
  // additional entity state properties
  errors: null
});

export function reducerBusiness(
  state = initialBusinessState,
  action: BusinessActions
): BusinessState {
  switch (action.type) {
    case BusinessActionTypes.AddBusiness: {
      return businessAdapter.addOne(action.payload.business, state);
    }

    case BusinessActionTypes.UpsertBusiness: {
      return businessAdapter.upsertOne(action.payload.business, state);
    }

    case BusinessActionTypes.AddBusinesses: {
      return businessAdapter.addMany(action.payload.businesses, state);
    }

    case BusinessActionTypes.UpsertBusinesses: {
      return businessAdapter.upsertMany(action.payload.businesses, state);
    }

    case BusinessActionTypes.UpdateBusiness: {
      return businessAdapter.updateOne(action.payload.business, state);
    }

    case BusinessActionTypes.UpdateBusinesses: {
      return businessAdapter.updateMany(action.payload.businesses, state);
    }

    case BusinessActionTypes.DeleteBusiness: {
      return businessAdapter.removeOne(action.payload.id, state);
    }

    case BusinessActionTypes.DeleteBusinesses: {
      return businessAdapter.removeMany(action.payload.ids, state);
    }

    case BusinessActionTypes.LoadBusinessSuccess: {
      return businessAdapter.addAll(action.payload.businesses, state);
    }

    case BusinessActionTypes.ClearBusinesses: {
      return businessAdapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
