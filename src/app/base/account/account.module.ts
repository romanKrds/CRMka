import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRoutes } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutes
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
