import { UpsertOrder } from '@actions/*';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {
  AppStore,
  Order,
  OrdersState,
  CustomerWithId,
  ServiceWithId,
  StatusWithId,
  OrderWithId,
  Status
} from '@models/*';
import { Store, select } from '@ngrx/store';
import {
  getServiceById,
  getStatusById,
  selectClientBusinessesAll,
  selectStatusesAll,
  selectServicesAll
} from '@selectors/*';
import { getCustomerById } from 'src/app/store/selectors/customers.selectors';
import {
  getOrderById,
  selectCurrentOrder
} from 'src/app/store/selectors/orders.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orders: OrdersState;
  statuses$: Observable<StatusWithId[]>;
  services$: Observable<ServiceWithId[]>;
  orderForm: FormGroup;
  currentOrder;
  changeOrder: Order;

  constructor(
    private store: Store<AppStore>,
    private fb: FormBuilder,
  ) {
    this.formInit();
  }

  ngOnInit() {
    this.store.pipe(select(selectCurrentOrder)).subscribe(value => {
      this.store
        .select(getOrderById(), value)
        .subscribe((valueOrder: OrderWithId) => {
          this.currentOrder = { ...valueOrder };
          this.store
            .select(getCustomerById(), valueOrder && valueOrder.customerId)
            .subscribe(
              (customer: CustomerWithId) =>
                (this.currentOrder.customer = { ...customer })
            );
          this.formFill();
        });
    });
    this.services$ = this.store.pipe(select(selectServicesAll));
    this.statuses$ = this.store.pipe(select(selectStatusesAll));
  }

  formInit(): void {
    this.orderForm = this.fb.group({
      name: [''],
      phone: [''],
      date_open: [''],
      date_finish: [''],
      comment: [''],
      service: [''],
      status: ['']
    });
  }

  formFill(): void {
    this.orderForm.patchValue({
      name: this.currentOrder.customer.first_name,
      phone: this.currentOrder.customer.phone,
      date_open: new Date(+this.currentOrder.started_at * 1000),
      date_finish: new Date(+this.currentOrder.ended_at * 1000),
      comment: this.currentOrder.comment,
      service: this.currentOrder.serviceId,
      status: this.currentOrder.state
    });
  }

  onSubmit(): void {
    const result: OrderWithId = {
      id: this.currentOrder.id,
      customerId: this.currentOrder.customerId,
      created_at: this.currentOrder.created_at,
      comment: this.orderForm.value.comment,
      started_at: String(new Date(this.orderForm.value.date_open / 1000).getTime()),
      ended_at: String(new Date(this.orderForm.value.date_finish / 1000).getTime()),
      serviceId: this.orderForm.value.service,
      state: this.orderForm.value.status
    };
    console.log('result', result);
    console.log(this.orderForm.value);
    this.store.dispatch(new UpsertOrder({ order: result }));
  }
}
