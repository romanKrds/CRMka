import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState } from '@models/*';

@Component({
  selector: 'app-poduct-card',
  templateUrl: './poduct-card.component.html',
  styleUrls: ['./poduct-card.component.scss']
})
export class PoductCardComponent implements OnInit {
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
