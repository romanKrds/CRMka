import { Component, OnInit } from '@angular/core';
import * as fm from './filter-panel/filter-panel.constants';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.scss']
})
export class OrdersDashboardComponent implements OnInit {

  filterMode = fm.filterMode;

  constructor() { }

  ngOnInit() {
  }

}
