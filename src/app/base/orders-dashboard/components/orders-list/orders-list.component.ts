import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { AppStore } from '@models/*';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIdsOrders } from 'src/app/store/selectors/orders.selectors';

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
