import { UserActions } from '../actions/user.actions';
import { UserActionTypes } from '../constants/user.constants';
import { UserState } from '../../models';

// TODO: Как проинициализировать пользователя если мне нужно только DisplayName и uid=null а самого пользователя я беру из Базы FireBase
export const initialUserState: UserState = {
    uid: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    displayName: 'Guest',
};

export function reducerUser(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.GetUser: {
      return {
        ...state,
          loading: true
      };
    }
    case UserActionTypes.Authenticated: {
      return {
        ...state,
        ...action.payload.user,
          loading: false
      };
    }
    case UserActionTypes.NotAuthenticated: {
      return {
        ...state,
        ...initialUserState,
        loading: false
      };
    }
    case UserActionTypes.GoogleLogin: {
      return {
        ...state,
          loading: true
      };
    }
    case UserActionTypes.AuthError: {
      console.log(action);
      return {
        ...state,
          error: action.payload.error,
          loading: false
      };
    }
    case UserActionTypes.Logout: {
      return {
        ...state,
        ...initialUserState
      };
    }

    default: {
      return state;
    }
  }
}
