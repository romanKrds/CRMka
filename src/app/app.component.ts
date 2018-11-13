import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppStore } from './models/models';
import { Store } from '@ngrx/store';
import { OrdersLoad } from './store/actions/order.actions';
import { ordersActionTypes } from './store/constants/order.constants';

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
    this.store.dispatch(new OrdersLoad)
    
  }
}
