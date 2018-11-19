import { Component, OnInit, Input } from '@angular/core';
import { Status, Service, AppStore, StatusesState } from '@models/*';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectStatusesAsArray, selectServicesAll } from '@selectors/*';


@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  services: Service[] = [];
  statuses: Status[] = [];

  @Input() isOrderFilter: boolean;


  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    if (this.isOrderFilter) {
      this.loadDataForSelects();
    }
    // console.log(this);
  }

  loadDataForSelects(): void {
    this.store.select(selectStatusesAsArray)
    .subscribe(
      (statuses: Status[] ) => this.statuses = statuses);

    this.store.select(selectServicesAll)
      .subscribe(
        (services: any) => services.map(key => this.services = [key, ...this.services])
      );

  }

}
