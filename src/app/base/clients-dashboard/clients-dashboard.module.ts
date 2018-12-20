import { NgModule } from '@angular/core';

import { ClientsDashboardRoutingModule } from './clients-dashboard-routing.module';
import { ClientsDashboardComponent } from './clients-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

@NgModule({
  declarations: [ClientsDashboardComponent, ClientsListComponent, ClientCardComponent],
  imports: [
    SharedModule,
    ClientsDashboardRoutingModule
  ]
})
export class ClientsDashboardModule { }
