import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersDashboardComponent } from './orders-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersDashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersDashboardRoutingModule { }
