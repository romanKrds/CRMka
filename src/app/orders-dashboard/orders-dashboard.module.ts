import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent]
})
export class OrdersDashboardModule { }
