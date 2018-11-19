import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders-dashboard'
  }, {
    path: 'orders-dashboard',
    loadChildren: './orders-dashboard/orders-dashboard.module#OrdersDashboardModule',
    canActivate: [AuthGuard]
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
