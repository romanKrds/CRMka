import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface StateUser {

}

export const initialStateUser: StateUser = {

};

export function reducer(state = initialStateUser, action: UserActions): StateUser {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return state;


    default:
      return state;
  }
}
