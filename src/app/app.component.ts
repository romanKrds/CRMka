import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppStore } from '@models/*';
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new LoadOrders());
    // this.store.dispatch(new LoadStatuses());
    // this.store.dispatch(new LoadServices());
    // this.store.dispatch(new LoadCustomers());
    // this.store.dispatch(new LoadBusiness());
    // this.store.dispatch({type: '[CurentClient] Load Success', payload: '1FHrxAIqCubegtQCZLR648FZLQh1'});
  }
}
