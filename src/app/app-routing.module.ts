import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectCurrentBusinessComponent } from './components/select-current-business/select-current-business.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      // {
        // path: 'registration',
        // component: RegistratioComponent
      // },
      {
        path: 'select-business',
        component : SelectCurrentBusinessComponent
      }
    ]
  },
  {
    path: 'orders',
    loadChildren: './base/base.module#BaseModule'
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
