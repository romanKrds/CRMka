import { NgModule } from '@angular/core';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';



import { SharedModule } from '../../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, ProductCardComponent, OrdersListComponent, OrderDetailsComponent, FilterPanelComponent]
})
export class OrdersDashboardModule { }
