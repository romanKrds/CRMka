import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '@models/*';
import { selectUserUid } from '@selectors/*';
import { GetUser } from '@actions/*';

@Injectable({
  providedIn: 'root'
})
export class IsLogInGuard implements CanActivate {

  authState = null;

  constructor(private store: Store<AppStore>, private router: Router) {
    this.store.dispatch(new GetUser());
    this.store.select(selectUserUid).subscribe( uid => {

      console.log('subscribe IsLogInGuard');
      this.authState = uid;
    }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('auth guard called is log in');
      if (this.authState === null) {
        console.warn('access granted! user not log in');
        return true;
      }
      console.error('access denied! user log in');
      this.router.navigate(['user']);
      return false;
  }
}
