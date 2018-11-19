import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState } from '@models/*';
import { getOrderById } from 'src/app/store/selectors/orders.selectors';
import { getServiceById, getStatusById } from '@selectors/*';
import { getCustomerById } from 'src/app/store/selectors/customers.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() orderId;
  order;
  date: number;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select(getOrderById(), this.orderId)
      .subscribe(value => {
        this.order = { ...value };
        this.store.select(getServiceById(), this.order.serviceId)
          .subscribe(service => this.order.service = { ...service });
        this.store.select(getCustomerById(), this.order.customerId)
          .subscribe(customer => this.order.customer = { ...customer });
        this.store.select(getStatusById(), this.order.state)
          .subscribe(state => this.order.state = { ...state });
      }
      );
  }
}
