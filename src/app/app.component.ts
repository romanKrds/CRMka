import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppStore } from './models/app-store.model';
import { CustomersActionTypes } from './store/constants/customer.constants';
import { Store } from '@ngrx/store';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMka';

  constructor(private db: AngularFireDatabase, private store: Store<AppStore>) {
    this.store.dispatch(new GetServices());


    // this.db.list('/customers').valueChanges()
    // .subscribe(
    //     value => console.log(value)
    //   );

    // this.db.list('/customers').snapshotChanges()
    //   .subscribe(
    //     value => console.log(value)
    //   );


    this.store.dispatch({
      type: CustomersActionTypes.LOAD_CUSTOMERS,
    });

    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log(value));

    this.store
      .select(selectStateServices)
      .subscribe(value => console.log(value));
  }
}
