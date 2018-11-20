import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore, Order, OrdersState, StatusesState, Status } from '@models/*';
import { selectServicesAll, selectAllStatuses, selectStatusesAsArray } from '@selectors/*';
import { selectAllOrders } from 'src/app/store/selectors/orders.selectors';

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
  currentOrder: Order;

  constructor(
    private store: Store<AppStore>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.store.select(selectAllOrders)
      .subscribe(value => (this.currentOrder = value[0],
        // this.currentOrder = value[0],
        console.log(this.currentOrder),
        this.formInit(),
        this.orderForm.valueChanges
          .subscribe((valueChange: any) => {
            console.log('form Value', valueChange);
          })
        )
    );
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

}
