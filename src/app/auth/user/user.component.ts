import { Component, OnInit } from '@angular/core';
import { User, AppStore } from 'src/app/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetUser, GoogleLogin, Logout } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;

  constructor(private state: Store<AppStore>) { }

  ngOnInit() {
    this.user$ = this.state.select(state => state.user.user);
    this.state.dispatch(new GetUser());
  }

  googleLogin() {
    this.state.dispatch(new GoogleLogin());
  }

  logout() {
    this.state.dispatch(new Logout());
  }

  getErrorMessage() {}

}
