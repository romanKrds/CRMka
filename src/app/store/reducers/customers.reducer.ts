import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CustomersActions  } from '@actions/*';
import { CustomersActionTypes } from '@constants/*';
import { Customer, CustomersState } from '@models/*';


 export const customersAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

 export const customersInitialState: CustomersState = customersAdapter.getInitialState({
   // additional entity state properties
   errors: null,
 });

export function customersReducer(
  state = customersInitialState,
  action: CustomersActions
): CustomersState {
  switch (action.type) {
    case CustomersActionTypes.AddCustomer: {
      return customersAdapter.addOne(action.payload.customer, state);
    }

    case CustomersActionTypes.UpsertCustomer: {
      return customersAdapter.upsertOne(action.payload.customer, state);
    }

    case CustomersActionTypes.AddCustomers: {
      return customersAdapter.addMany(action.payload.customers, state);
    }

    case CustomersActionTypes.UpsertCustomers: {
      return customersAdapter.upsertMany(action.payload.customers, state);
    }

    case CustomersActionTypes.UpdateCustomer: {
      return customersAdapter.updateOne(action.payload.customer, state);
    }

    case CustomersActionTypes.UpdateCustomers: {
      return customersAdapter.updateMany(action.payload.customers, state);
    }

    case CustomersActionTypes.DeleteCustomer: {
      return customersAdapter.removeOne(action.payload.id, state);
    }

    case CustomersActionTypes.DeleteCustomers: {
      return customersAdapter.removeMany(action.payload.ids, state);
    }

    case CustomersActionTypes.LoadCustomersSuccess: {
      console.log('Load Customers reducer', action, state);
      return customersAdapter.addAll(action.payload.customers, state);
    }

    case CustomersActionTypes.ClearCustomers: {
      return customersAdapter.removeAll(state);
    }

    case CustomersActionTypes.ErrorCustomers: {
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

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = customersAdapter.getSelectors();
