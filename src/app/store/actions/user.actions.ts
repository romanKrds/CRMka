import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActionTypes } from '../constants/user.constants';

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
  constructor(public payload?: any) {}
}
export class Authenticated implements Action {
  readonly type = UserActionTypes.Authenticated;
  constructor(public payload?: any) {}
}
export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.NotAuthenticated;
  constructor(public payload?: any) {}
}
export class GoogleLogin implements Action {
  readonly type = UserActionTypes.GoogleLogin;
  constructor(public payload?: any) {}
}
export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
  constructor(public payload?: any) {}
}
export class AuthError implements Action {
  readonly type = UserActionTypes.AuthError;
  constructor(public payload?: any) {}
}

export type UserActions =
  | GetUser
  | Authenticated
  | NotAuthenticated
  | GoogleLogin
  | Logout
  | AuthError;
