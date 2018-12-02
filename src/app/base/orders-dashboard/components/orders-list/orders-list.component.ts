import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore, Order } from '@models/*';
import { selectAllOrders, selectIdsOrders, selectEntitiesOrders, selectStateOrders } from 'src/app/store/selectors/orders.selectors';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  ordersIds$: Observable<(string | number)[]>;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.ordersIds$ = this.store.pipe(
      select(selectIdsOrders),
    );
  }
  pageEvent: PageEvent;

}
