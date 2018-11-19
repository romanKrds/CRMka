import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState } from '@models/*';
import { getOrderById } from 'src/app/store/selectors/orders.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() orderId;
  order: Order;
  date: number;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {

    this.store.select(getOrderById(), this.orderId)
      .subscribe(value => {
        this.order = value;
      }
      );

  }
}
