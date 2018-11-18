import { NgModule } from '@angular/core';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, OrderDetailsComponent]
})
export class OrdersDashboardModule { }
