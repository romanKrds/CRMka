import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent]
})
export class AuthModule {}
