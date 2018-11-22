import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState, StatusesState, Status } from '@models/*';
import { selectServicesAll, selectAllStatuses, selectStatusesAsArray, getServiceById, getStatusById } from '@selectors/*';
import { selectAllOrders, selectCurrentOrder, getOrderById } from 'src/app/store/selectors/orders.selectors';
import { getCustomerById } from 'src/app/store/selectors/customers.selectors';
import { DateAdapter } from '@angular/material/core';


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

  constructor(
    private store: Store<AppStore>,
    private fb: FormBuilder,
    private adapter: DateAdapter<any>
  ) { }

  ngOnInit() {
    this.store.select(selectCurrentOrder)
      .subscribe(value => {
        this.store.select(getOrderById(), value)
          .subscribe(valueOrder => (
            this.currentOrder = { ...valueOrder },
            this.store.select(getCustomerById(), valueOrder && valueOrder.customerId)
              .subscribe(customer => this.currentOrder.customer = { ...customer }),
            this.store.select(getServiceById(), valueOrder && valueOrder.serviceId)
              .subscribe(service => this.currentOrder.service = { ...service }),
            this.store.select(getStatusById(), valueOrder && valueOrder.state)
              .subscribe(status => this.currentOrder.status = { ...status }),
            this.orderForm && this.formFill()
          ));
          this.adapter.setLocale('fr');
      }
      );
    // this.store.select(selectAllOrders)
    //   .subscribe(value => (this.currentOrder = value[0],
    //     console.log(this.currentOrder)
    //   )
    // );
    this.store.select(selectServicesAll)
      .subscribe(value => (this.services = value,
        // this.currentOrder = value[0],
        console.log(this.services)
      )
      );
    this.store.select(selectStatusesAsArray)
      .subscribe(value => (this.statuses = value,
        // this.currentOrder = value[0],
        console.log(this.statuses)
      )
      );
    this.formInit(),
      this.orderForm.valueChanges
        .subscribe((valueChange: any) => {
          console.log('form Value', valueChange);
        });
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
      name: [this.currentOrder.customer.first_name],
      phone: [this.currentOrder.customer.phone],
      date_open: new Date(+this.currentOrder.started_at),
      date_finish: new Date(+this.currentOrder.ended_at),
      comment: [this.currentOrder.comment],
      service: [this.currentOrder.service.title],
      status: [this.currentOrder.status.title]
    });
  }
}
