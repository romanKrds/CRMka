import { CustomersActionsUnion } from '../actions/customer.actions';
import { initialState, customerAdapter } from 'src/app/models/customer.state';
import { CustomersActionTypes } from '../constants/customer.constants';
import { State } from '../../models/customer.state';

export function customersReducer(state = initialState, action: CustomersActionsUnion): State {
    switch (action.type) {

        case CustomersActionTypes.LOAD_CUSTOMERS: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }

        case CustomersActionTypes.LOAD_CUSTOMERS_SUCCESS: {
            console.log('reducer LOAD_CUSTOMERS_SUCCESS');
            // adapterServices.addAll(action.payload.servicess, state);
            return customerAdapter.addAll(action.payload.data, {
                ...state,
                isLoading: false,
                error: null
            });
        }

        case CustomersActionTypes.LOAD_CUSTOMERS_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }


        default: {
            console.log('default');
            return state;
        }
    }
}
