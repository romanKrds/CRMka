import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { MaterialModules } from '../materials.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, FilterPanelComponent]
})
export class OrdersDashboardModule { }
