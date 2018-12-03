import { ChangeCurrentOrder } from '@actions/*';
import { Component, Input, OnInit } from '@angular/core';
import { AppStore } from '@models/*';
import { select, Store } from '@ngrx/store';
import { getServiceById, getStatusById } from '@selectors/*';
import { getCustomerById } from 'src/app/store/selectors/customers.selectors';
import { getOrderById, selectCurrentOrder } from 'src/app/store/selectors/orders.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() orderId;
  order;
  currentOrder;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.pipe(select(selectCurrentOrder))
      .subscribe(value => this.currentOrder = value);
    this.store.select(getOrderById(), this.orderId)
      .subscribe(value => {
        this.order = { ...value };
        this.store.select(getServiceById(), this.order.serviceId)
          .subscribe(service => this.order.service = { ...service });
        this.store.select(getCustomerById(), this.order.customerId)
          .subscribe(customer => this.order.customer = { ...customer });
        this.store.select(getStatusById(), this.order.state)
          .subscribe(state => this.order.stateObj = { ...state });
      }
      );
  }
  choseCurrentOrder(): void {
    this.store.dispatch(new ChangeCurrentOrder(this.orderId));
  }
}
