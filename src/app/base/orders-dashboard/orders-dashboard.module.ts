import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDashboardRoutingModule } from './orders-dashboard-routing.module';
import { OrdersDashboardComponent } from './orders-dashboard.component';



import { SharedModule } from '../../shared/shared.module';
import { FilterPanelComponent } from 'src/app/orders-dashboard/filter-panel/filter-panel.component';
import { ProductCardComponent } from 'src/app/orders-dashboard/product-card/product-card.component';
import { OrdersListComponent } from 'src/app/orders-dashboard/orders-list/orders-list.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersDashboardRoutingModule
  ],
  declarations: [OrdersDashboardComponent, ProductCardComponent, OrdersListComponent, FilterPanelComponent]
})
export class OrdersDashboardModule { }
