import { UserActions } from '@actions/*';
import { UserActionTypes } from '@constants/*';
import { UserState } from '@models/*';

export const initialUserState: UserState = {
    uid: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    displayName: 'Guest',
    first_name: null,
    last_name: null,
    phone: null
};

export function currentClientReducer(
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
    case UserActionTypes.LoadUserData: {
      return {
        ...state,
        ...action.payload.clients
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

    default:
    return state;
  }
}
