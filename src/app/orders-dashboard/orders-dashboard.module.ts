import { NgModule } from '@angular/core';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { FilterPanelComponent } from './filter-panel/filter-panel.component';

import { ProductCardComponent } from './product-card/product-card.component';

import { SharedModule } from '../shared/shared.module';
import { OrdersListComponent } from './orders-list/orders-list.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, ProductCardComponent, OrdersListComponent, OrderDetailsComponent, FilterPanelComponent]
})
export class OrdersDashboardModule { }
