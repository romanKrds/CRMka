import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppStore } from './models/models';
import { Store } from '@ngrx/store';
import { OrdersLoad } from './store/actions/order.actions';
import { ordersActionTypes } from './store/constants/order.constants';
import { mergeMap, map } from 'rxjs/operators';
import { Order } from './models/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMka';

  constructor(
    private db: AngularFireDatabase,
    private store: Store<AppStore>
  ) {
    console.log('sdfsd');
    // this.store.dispatch(new OrdersLoad());
    // this.db.list('/orders').valueChanges().pipe(
    //   map((orders: Order[]) => this.store.dispatch({
    //     type: ordersActionTypes.LOAD_SUCCESS,
    //     payload: orders
    //   }))
    // );

    // this.store.dispatch({
    //   type: ordersActionTypes.LOAD_SUCCESS,
    //   payload: []
    // });
  }
}
