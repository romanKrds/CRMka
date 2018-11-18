import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { GetUser } from './store/actions/user.actions';

import { AppStore, OrdersState } from '@models/*';

import { LoadStatuses, LoadOrders, LoadServices, LoadCustomers } from '@actions/*';
import { selectStateServices, selectStatusesAsArray} from '@selectors/*';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

  constructor(private db: AngularFireDatabase, private store: Store<AppStore>) {}

  ngOnInit() {
    // this.store.dispatch(new LoadOrders());
    // this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadServices());
    // this.store.dispatch(new LoadCustomers());

    // this.store.select('orders').subscribe(
    //   (orders: OrdersState) => console.log(orders)
    // );

    // this.store
    //   .select(selectStatusesAsArray)
    //   .subscribe( statuses => {
    //       console.log('STATUSES: ', statuses);
    //       // this.statuses = statuses;
    //     }
    //   );

    // this.store
    //   .select(selectStateServices)
    //   .subscribe(value => console.log('SERVICES: ', value));
    // this.db
    //   .list('/clients')
    //   .valueChanges()
    //   .subscribe(value => console.log(value));

    // this.store
    //   .select(selectStateServices)
    //   .subscribe(value => console.log(value));

    // this.store.dispatch(new GetUser());

    // this.store
    //   .select(selectStateServices)
    //   .subscribe(value => console.log('CLIENTS: ', value));
  }
}
