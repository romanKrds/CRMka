import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { AppStore } from './models';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';
import { getStatuses } from './store/actions/statuses.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRMka';
  service;
  constructor(private db: AngularFireDatabase, private state: Store<AppStore>) {
    this.state.dispatch(new GetServices());
    this.state.dispatch(new getStatuses());

    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log(value));

    this.state
      .select(selectStateServices)
      .subscribe(value => console.log(value));
  }
  ngOnInit() {
    this.state.select('statuses')
      .subscribe(
        (data) => {
          console.log('STATUSES', data);
        }
      )
  }
}
