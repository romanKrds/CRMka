import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Business, AppStore } from '@models/*';
import { select, Store } from '@ngrx/store';
import { selectClientBusinessesAll } from '@selectors/*';
import { SelectCurrentBusiness } from '@actions/*';

@Component({
  selector: 'app-select-current-business',
  templateUrl: './select-current-business.component.html',
  styleUrls: ['./select-current-business.component.scss']
})
export class SelectCurrentBusinessComponent implements OnInit {

  business$: Observable<Business[]>;
  constructor(
    private state: Store<AppStore>
  ) {
  }

  ngOnInit() {
    this.business$ = this.state.pipe(select(selectClientBusinessesAll));
  }
  onSelect(business) {
    this.state.dispatch(new SelectCurrentBusiness(business));
  }
}
