import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDashboardComponent } from './clients-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsDashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsDashboardRoutingModule {}
