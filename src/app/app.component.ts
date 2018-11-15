import { selectStateStatuses, selectAllStatuses, selectStatusesAsArray } from './store/selectors/statuses.selectors';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from '@ngrx/store';
import { AppStore, Status } from './models';
import { GetServices } from './store/actions/services.actions';
import { selectStateServices } from './store/selectors/services.selectors';
import { GetStatuses } from './store/actions/statuses.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRMka';
  
  constructor(private db: AngularFireDatabase, private state: Store<AppStore>) {}

  ngOnInit() {
    this.state.dispatch(new GetStatuses());
    this.state.dispatch(new GetServices());

    this.state
      .select(selectStatusesAsArray)
      .subscribe( statuses => {
          console.log('STATUSES: ', statuses);
          // this.statuses = statuses;
        }
      )

    this.state
      .select(selectStateServices)
      .subscribe(value => console.log('SERVICES: ', value));
    this.db
      .list('/clients')
      .valueChanges()
      .subscribe(value => console.log('CLIENTS: ',value));

    
  }
}
