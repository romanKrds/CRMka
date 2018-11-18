import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Order } from '@models/*';
import { selectAllOrders, selectIdsOrders, selectEntitiesOrders, selectStateOrders } from 'src/app/store/selectors/orders.selectors';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  ordersIds: (string | number)[];

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.store.select(selectIdsOrders)
      .subscribe(
        ordersIds => {
          this.ordersIds = [...ordersIds];
          this.ordersIds = this.ordersIds.splice(0, 10);
          // console.log(this.ordersIds);
        }
      );
    this.store.select(selectStateOrders)
      .subscribe(value => console.log(value)
      );


  }

}
