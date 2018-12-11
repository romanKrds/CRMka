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
  OrderWithId
} from '@models/*';
import { Store, select } from '@ngrx/store';
import {
  getServiceById,
  getStatusById,
  selectClientBusinessesAll,
  selectStatusesAll
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
  statuses: any;
  services: any;
  orderForm: FormGroup;
  currentOrder;
  changeOrder: Order;
  tes$: Observable<FormBuilder>;

  constructor(
    private store: Store<AppStore>,
    private fb: FormBuilder,
    private adapter: DateAdapter<any>
  ) {}

  ngOnInit() {
    this.store.pipe(select(selectCurrentOrder)).subscribe(value => {
      this.store
        .select(getOrderById(), value)
        .subscribe(
          (valueOrder: OrderWithId) => (
            (this.currentOrder = { ...valueOrder }),
            this.store
              .select(getCustomerById(), valueOrder && valueOrder.customerId)
              .subscribe(
                (customer: CustomerWithId) =>
                  (this.currentOrder.customer = { ...customer })
              ),
            this.store
              .select(getServiceById(), valueOrder && valueOrder.serviceId)
              .subscribe(
                (service: ServiceWithId) =>
                  (this.currentOrder.service = { ...service })
              ),
            this.store
              .select(getStatusById(), valueOrder && valueOrder.state)
              .subscribe(
                (status: StatusWithId) =>
                  (this.currentOrder.status = { ...status })
              ),
            this.orderForm && this.formFill()
          )
        );
      // this.adapter.setLocale('fr');
    });
    this.store
      .pipe(select(selectClientBusinessesAll))
      .subscribe(value => (this.services = value));
    this.store
      .pipe(select(selectStatusesAll))
      .subscribe(value => (this.statuses = value));
    this.formInit();
    // this.orderForm.valueChanges.subscribe((valueChange: any) => {
    //   console.log('form Value', valueChange);
    //   // this.currentOrder.comment = valueChange.comment;
    // });
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
      service: this.currentOrder.service.id,
      status: this.currentOrder.status.id
    });
  }

  onSubmit(): void {
    // console.log(this.currentOrder);
    const stateid = this.statuses.findIndex(
      item => item.title === this.orderForm.value.status
    );
    const result: OrderWithId = {
      id: this.currentOrder.id,
      comment: this.orderForm.value.comment,
      created_at: this.currentOrder.created_at,
      customerId: this.currentOrder.customerId,
      ended_at: this.currentOrder.ended_at,
      serviceId: this.currentOrder.serviceId,
      started_at: this.currentOrder.started_at,
      state: this.orderForm.get('status').value
    };
    console.log('result', result);
    console.log(this.orderForm.value);
    this.store.dispatch(new UpsertOrder({ order: result }));
    // console.log(this.statuses);
    // console.log(stateid);
    // console.log(this.statuses[stateid]);
  }
}
