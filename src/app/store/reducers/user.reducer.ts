import { UserActions } from '../actions/user.actions';
import { UserActionTypes } from '../constants/user.constants';
import { UserState } from '../../models';

// TODO: Как проинициализировать пользователя если мне нужно только DisplayName и uid=null а самого пользователя я беру из Базы FireBase
export const initialUserState: UserState = {
  user: {
    uid: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    displayName: 'Guest'
  }
};

export function reducerUser(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.GetUser: {
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      };
    }
    case UserActionTypes.Authenticated: {
      return {
        ...state,
        user: {
          ...action.payload,
          loading: false
        }
      };
    }
    case UserActionTypes.NotAuthenticated: {
      return {
        ...state,
        ...initialUserState
      };
    }
    case UserActionTypes.GoogleLogin: {
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      };
    }
    case UserActionTypes.AuthError: {
      console.log(action);
      return {
        ...state,
        user: {
          ...state.user,
          error: action.payload.error,
          loading: false
        }
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
