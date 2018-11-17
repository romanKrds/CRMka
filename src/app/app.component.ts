import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';

import { AppStore, Orders, } from '@models/index';
import { GetStatuses } from './store/actions/statuses.actions';
import { GetOrders } from './store/actions/order.actions';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';
import { selectStatusesAsArray } from './store/selectors/statuses.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private store: Store<AppStore>) {}

  ngOnInit() {
    this.store.dispatch(new GetOrders());
    this.store.dispatch(new GetStatuses());
    this.store.dispatch(new GetServices());

    this.store.select('orders').subscribe(
      (orders: Orders) => console.log(orders)
    );

    this.store
      .select(selectStatusesAsArray)
      .subscribe( statuses => {
          console.log('STATUSES: ', statuses);
          // this.statuses = statuses;
        }
      );

    this.store
      .select(selectStateServices)
      .subscribe(value => console.log('SERVICES: ', value));
    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log('CLIENTS: ', value));
  }
}
