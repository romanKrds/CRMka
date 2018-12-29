import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Store, select } from '@ngrx/store';

import { AppStore } from '@models/*';
import { LoadStatuses, LoadCustomers } from '@actions/*';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private store: Store<AppStore>) { }

  ngOnInit() {
    // this.store.dispatch(new LoadOrders());
    this.store.dispatch(new LoadStatuses());
    // this.store.dispatch(new LoadServices());
    this.store.dispatch({type: '[CurentClient] Load Success', payload: '1FHrxAIqCubegtQCZLR648FZLQh1'});
    this.store.dispatch({type: '[CurentBusiness] Load Success', payload: '-LRrb5BmtO6LilxN-khs'});

    this.store.select('orders').subscribe(
      // (orders: OrdersState) => console.log(orders)
    );
      this.store.pipe(
        select('currentBusiness')
      );

    this.store
      .pipe(
        select('currentBusiness')
      )

      .subscribe(
        (business: string) => this.store.dispatch(new LoadCustomers({business}))
      );

  }
}
