import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BaseComponent,
    children: [
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: '',
        loadChildren: './orders-dashboard/orders-dashboard.module#OrdersDashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
