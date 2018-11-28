import { Action } from '@ngrx/store';
import { UserActionTypes } from '@constants/*';
import { User, UserState } from '@models/*';
import { UserInfo } from 'firebase';

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
}
export class Authenticated implements Action {
  readonly type = UserActionTypes.Authenticated;
  constructor(public payload: { user: User }) {}
}
export class LoadUserData implements Action {
  readonly type = UserActionTypes.LoadUserData;
  constructor(public payload: { clients: UserState }) {}
}
export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.NotAuthenticated;
  constructor(public payload?: any) {}
}
export class GoogleLogin implements Action {
  readonly type = UserActionTypes.GoogleLogin;
  constructor(public payload?: any) {}
}
export class PasswordLogin implements Action {
  readonly type = UserActionTypes.EmailPasswordLogin;
  constructor(public payload: {email: string, password: string}) {}
}
export class PasswordRegister implements Action {
  readonly type = UserActionTypes.EmailPasswordRegister;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
  constructor(public payload?: any) {}
}
export class AuthError implements Action {
  readonly type = UserActionTypes.AuthError;
  constructor(public payload: {error: string}) {}
}

export type UserActions =
  | GetUser
  | Authenticated
  | LoadUserData
  | NotAuthenticated
  | GoogleLogin
  | Logout
  | AuthError;
