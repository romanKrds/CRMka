import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from './models';
import { selectUserUid } from '@selectors/*';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authState = null;

  constructor(private store: Store<AppStore>, private router: Router) {
    this.store.select(selectUserUid).subscribe( uid => {

      console.log('subscribe');
      this.authState = uid;
    }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('auth guard called');
      if (this.authState) {
        console.warn('access granted!');
        return true;
      }
      console.error('access denied!');
      this.router.navigate(['user/login']);
      return false;
  }
}
