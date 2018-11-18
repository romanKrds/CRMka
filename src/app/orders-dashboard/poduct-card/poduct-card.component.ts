import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState } from '@models/*';
import { selectIdsOrders, selectAllOrders } from 'src/app/store/selectors/orders.selectors';

@Component({
  selector: 'app-poduct-card',
  templateUrl: './poduct-card.component.html',
  styleUrls: ['./poduct-card.component.scss']
})
export class PoductCardComponent implements OnInit {
  @Input() orderId;
  order: Order;
  date: number;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select(selectAllOrders)
      .subscribe(value => {
        this.order = value[0];
        this.date = value[0] ? +value[0].started_at : null;
      }
      );

  }
}
