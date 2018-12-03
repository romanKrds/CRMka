import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectCurrentBusinessComponent } from './components/select-current-business/select-current-business.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  }, {
    path: 'base',
    loadChildren: './base/base.module#BaseModule'
  }, {
    path: 'select-business',
    component : SelectCurrentBusinessComponent
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
