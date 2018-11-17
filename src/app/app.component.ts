import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';

import { AppStore, Order, Orders, Status } from '@models/index';
import { GetStatuses } from './store/actions/statuses.actions';
import { GetOrders } from './store/actions/order.actions';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';
import { selectStateStatuses, selectAllStatuses, selectStatusesAsArray } from './store/selectors/statuses.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CRMka';
  
  constructor(private db: AngularFireDatabase, private state: Store<AppStore>) {}

  ngOnInit() {
    this.store.dispatch(new GetOrders());
    this.state.dispatch(new GetStatuses());
    this.state.dispatch(new GetServices());

    this.store.select('orders').subscribe(
      (orders: Orders) => this.orders = orders
    );
    
    this.state
      .select(selectStatusesAsArray)
      .subscribe( statuses => {
          console.log('STATUSES: ', statuses);
          // this.statuses = statuses;
        }
      )

    this.state
      .select(selectStateServices)
      .subscribe(value => console.log('SERVICES: ', value));
    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log('CLIENTS: ',value));
  }
}
