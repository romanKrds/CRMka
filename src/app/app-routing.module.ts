import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders-dashboard'
  }, {
    path: 'orders-dashboard',
    loadChildren: './orders-dashboard/orders-dashboard.module#OrdersDashboardModule'
  },
  {
    path: 'user',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
