import { Component, OnInit, Input } from '@angular/core';
import { Status, Service, AppStore, StatusesState } from '@models/*';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectStatusesAsArray, selectServicesAll } from '@selectors/*';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  services: Service[] = [];
  statuses: Status[] = [];
  title: string;

  filterForm = this.fb.group({
    name: [''],
    phone: [''],
    service: [''],
    status: ['']
    });

  @Input() isOrderFilter: boolean;


  constructor(private store: Store<AppStore>, private fb: FormBuilder) { }

  ngOnInit() {
    if (this.isOrderFilter) {
      this.loadDataForSelects();
      this.title = 'Найти заявку';
    } else {
      this.title = 'Найти клиента';
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

  onSubmit(): void {
    console.log(this.filterForm.value);
  }

  onReset(): void {
    this.filterForm.reset();
  }

}
