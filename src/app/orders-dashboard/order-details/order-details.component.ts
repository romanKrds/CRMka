import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState } from '@models/*';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders: OrdersState;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select('orders')
      .subscribe(value => this.orders = value
      );
  }

}
