import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '../../models/customer.model';
import { CustomerActions  } from '../actions/customer.actions';
import { CustomerActionTypes } from '../constants/customer.constants';
import { initialState, State, customerAdapter } from '@models/customer.state';

// export interface State extends EntityState<Customer> {
//   // additional entities state properties
// }

// export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

// export const initialState: State = adapter.getInitialState({
//   // additional entity state properties
// });

export function reducer(
  state = initialState,
  action: CustomerActions
): State {
  switch (action.type) {
    case CustomerActionTypes.AddCustomer: {
      return customerAdapter.addOne(action.payload.customer, state);
    }

    case CustomerActionTypes.UpsertCustomer: {
      return customerAdapter.upsertOne(action.payload.customer, state);
    }

    case CustomerActionTypes.AddCustomers: {
      return customerAdapter.addMany(action.payload.customers, state);
    }

    case CustomerActionTypes.UpsertCustomers: {
      return customerAdapter.upsertMany(action.payload.customers, state);
    }

    case CustomerActionTypes.UpdateCustomer: {
      return customerAdapter.updateOne(action.payload.customer, state);
    }

    case CustomerActionTypes.UpdateCustomers: {
      return customerAdapter.updateMany(action.payload.customers, state);
    }

    case CustomerActionTypes.DeleteCustomer: {
      return customerAdapter.removeOne(action.payload.id, state);
    }

    case CustomerActionTypes.DeleteCustomers: {
      return customerAdapter.removeMany(action.payload.ids, state);
    }

    case CustomerActionTypes.LoadCustomers: {
      console.log('Load Customers reducer', action, state);
      return customerAdapter.addAll(action.payload.customers, state);
    }

    case CustomerActionTypes.ClearCustomers: {
      return customerAdapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = customerAdapter.getSelectors();
