import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStore, User } from '@models/*';
import { selectStateUser } from '@selectors/*';
import { Logout } from '@actions/*';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private state: Store<AppStore>
  ) { }

  ngOnInit() {
    this.user$ =  this.state.pipe(select(selectStateUser));
  }
  logout() {
    this.state.dispatch(new Logout());
  }

}
