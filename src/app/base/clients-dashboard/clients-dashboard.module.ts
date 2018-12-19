import { NgModule } from '@angular/core';

import { ClientsDashboardRoutingModule } from './clients-dashboard-routing.module';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ClientsDashboardComponent],
  imports: [
    SharedModule,
    ClientsDashboardRoutingModule
  ]
})
export class ClientsDashboardModule { }
