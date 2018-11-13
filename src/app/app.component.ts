import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { AppStore } from './models';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMka';
  service;
  constructor(private db: AngularFireDatabase, private state: Store<AppStore>) {
    // this.state.dispatch(new GetServices());

    // this.db
    //   .list('/clients')
    //   .valueChanges()
    //   .subscribe(value => console.log(value));

    // this.state
    //   .select(selectStateServices)
    //   .subscribe(value => console.log(value));


  }
}
