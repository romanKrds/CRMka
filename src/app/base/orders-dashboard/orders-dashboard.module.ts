import { NgModule } from '@angular/core';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';



import { SharedModule } from '../../shared/shared.module';
import { FilterPanelComponent } from 'src/app/orders-dashboard/filter-panel/filter-panel.component';
import { ProductCardComponent } from 'src/app/orders-dashboard/product-card/product-card.component';
import { OrdersListComponent } from 'src/app/orders-dashboard/orders-list/orders-list.component';
import { OrderDetailsComponent } from 'src/app/orders-dashboard/order-details/order-details.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, ProductCardComponent, OrdersListComponent, OrderDetailsComponent, FilterPanelComponent]
})
export class OrdersDashboardModule { }
