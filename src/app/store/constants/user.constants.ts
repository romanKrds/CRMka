export enum UserActionTypes {
  GetUser = '[Auth] Get User',
  Authenticated = '[Auth] Authenticated',
  NotAuthenticated = '[Auth] Not Authenticated',
  GoogleLogin = '[Auth] Google Login',
  EmailPasswordLogin = '[Auth] Email Password Login',
  Logout = '[Auth] Logout',
  AuthError = '[Auth] Error'
}
