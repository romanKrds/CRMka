import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState, StatusesState, Status } from '@models/*';
import { selectServicesAll, selectAllStatuses, selectStatusesAsArray } from '@selectors/*';
import { selectAllOrders, selectCurrentOrder, getOrderById } from 'src/app/store/selectors/orders.selectors';

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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.store.select(selectCurrentOrder)
      .subscribe(value => {
        this.store.select(getOrderById(), value)
          .subscribe(valueOrder => (
            this.currentOrder = {...valueOrder},
            this.orderForm && this.formFill()
          ));
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
      name: [''],
      phone: [''],
      date_open: [''],
      date_finish: [''],
      comment: [this.currentOrder.comment],
      service: [''],
      status: ['']
    });
  }
}
