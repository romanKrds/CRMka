import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, OrderDetailsComponent]
})
export class OrdersDashboardModule { }
