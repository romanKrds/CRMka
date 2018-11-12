import { UserActions } from '../actions/user.actions';
import { UserActionTypes } from '../constants/user.constants';
import { UserState } from '../../models';

export const initialUserState: UserState = {
  user: {
    uid: null,
    displayName: 'Guest'
  }
};

export function reducer(
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
      return {
        ...state,
        user: {
          ...action.payload,
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
