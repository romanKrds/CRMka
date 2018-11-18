export enum UserActionTypes {
  GetUser = '[Auth] Get User',
  Authenticated = '[Auth] Authenticated',
  NotAuthenticated = '[Auth] Not Authenticated',
  GoogleLogin = '[Auth] Google Login',
  EmailPasswordLogin = '[Auth] Email Password Login',
  EmailPasswordRegister = '[Auth] Email Password Register',
  Logout = '[Auth] Logout',
  AuthError = '[Auth] Error'
}
