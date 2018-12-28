import { CustomersPerBusinessActionTypes } from '@constants/*';
import {CustomersPerBusinessActions} from '@actions/*';


const initialState = [''];

export function customersPerBusinessReducer(
  state = initialState,
  action: CustomersPerBusinessActions
) {
  switch (action.type) {

    case CustomersPerBusinessActionTypes.LoadCustomersPerBusinessSuccess : {
      return [...action.payload.customers];
    }

    default: {
      return state;
    }
  }
}
