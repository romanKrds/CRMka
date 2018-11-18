import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';
import { PoductCardComponent } from './poduct-card/poduct-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, PoductCardComponent]
})
export class OrdersDashboardModule { }
