import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { AppStore } from './models';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';
import { GetUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMka';
  service;
  sideNavMode = 'side'; // 'side' or 'over'
  navList = [
    {
      path: '',
      title:  'Home'
    },
    {
      path: 'user',
      title: 'User'
    },
    {
      path: 'user/login',
      title: 'Login'
    },
    {
      path: 'user/register',
      title: 'Register'
    },
    {
      path: 'orders-dashboard',
      title: 'Orders Dashboard'
    }
  ];
  constructor(private db: AngularFireDatabase, private state: Store<AppStore>) {
    this.state.dispatch(new GetServices());

    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log(value));

    this.state
      .select(selectStateServices)
      .subscribe(value => console.log(value));

    this.state.dispatch(new GetUser());
  }
}
