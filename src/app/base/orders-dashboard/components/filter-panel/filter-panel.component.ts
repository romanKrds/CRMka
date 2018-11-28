import { Component, OnInit, Input } from '@angular/core';
import { Status, Service, AppStore, StatusesState } from '@models/*';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectStatusesAsArray, selectClientBusinessesAll } from '@selectors/*';
import { FormBuilder, Validators } from '@angular/forms';
import * as fm from './filter-panel.constants';
import { MatSelect } from '@angular/material';



@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  services: Service[] = [];
  statuses: Status[] = [];
  title: string;
  serviceTooltip: string;
  statusTooltip: string;

  filterMode = fm.filterMode;

  filterForm = this.fb.group({
    name: [''],
    phone: [''],
    service: [''],
    status: ['']
    });

  @Input() FilterMode: fm.filterMode;


  constructor(private store: Store<AppStore>, private fb: FormBuilder) { }

  ngOnInit() {

    if (this.FilterMode === this.filterMode.Orders) {
      this.loadDataForSelects();
      this.title = 'Найти заявку';
    } else {
      this.title = 'Найти клиента';
    }
    this.onReset();
  }



  loadDataForSelects(): void {

    this.store.select(selectStatusesAsArray)
    .subscribe(
      (statuses: Status[] ) => this.statuses = statuses);

    this.store.select(selectClientBusinessesAll)
      .subscribe(
        (services: any) => services.map(key => this.services = [key, ...this.services])
      );
  }

  onSubmit(): void {
    // console.log(this.filterForm.value);
  }

  onReset(): void {
    this.filterForm.reset();
    this.statusTooltip = '';
    this.serviceTooltip = '';
  }

  isValidPhone(): boolean {
    let result = false;
    if (this.filterForm.value.phone) {
      result = ((<number>this.filterForm.value.phone).toString().length >= fm.MIN_PHONE_LENGTH);
    }
    return result;
  }

  isValidName(): boolean {
    let result = false;
    if (this.filterForm.value.name) {
      result = ((<string>this.filterForm.value.name).length >= fm.MIN_NAME_LENGTH);
    }
    return result;
  }

  isValidStatus(): boolean {
    let result = false;
    if (this.FilterMode === this.filterMode.Orders) {
      result = (this.filterForm.value.status != null);
    }
    return result;
  }

  isValidService(): boolean {
    let result = false;
    if (this.FilterMode === this.filterMode.Orders) {
      result = (this.filterForm.value.service != null);
    }
    return result;
  }


  isFindButtonEnabled(): boolean {
    let result = false;
    const IS_PHONE_NULL = (this.filterForm.value.phone === null);
    const IS_NAME_NULL = (this.filterForm.value.name === null);
    const IS_SERVICE_NULL = (this.filterForm.value.service === null);
    const IS_STATUS_NULL = (this.filterForm.value.status === null);


    result =  ((this.isValidName() &&
                (IS_PHONE_NULL || this.isValidPhone()) &&
                (IS_SERVICE_NULL || this.isValidService()) &&
                (IS_STATUS_NULL || this.isValidStatus())) ||
               (this.isValidPhone() &&
                (IS_NAME_NULL || this.isValidName()) &&
                (IS_SERVICE_NULL || this.isValidService()) &&
                (IS_STATUS_NULL || this.isValidStatus())) ||
               (this.isValidService() &&
                (IS_NAME_NULL || this.isValidName()) &&
                (IS_PHONE_NULL || this.isValidPhone()) &&
                (IS_STATUS_NULL || this.isValidStatus()))  ||
               (this.isValidStatus() &&
                (IS_NAME_NULL || this.isValidName()) &&
                (IS_PHONE_NULL || this.isValidPhone()) &&
                (IS_SERVICE_NULL || this.isValidService()))
              );
    //  console.log(result, this.filterForm.value);

    return result;
  }

  isCancelButtonEnabled(): boolean {
    let result = false;

    if ((this.filterForm.value.name) ||
        (this.filterForm.value.phone) ||
        this.isValidStatus() ||
        this.isValidService()) {
          result = true;
        }

    return result;
  }

  onClear(controlName: string): void {
    this.filterForm.controls[controlName].setValue(null);
  }
}
