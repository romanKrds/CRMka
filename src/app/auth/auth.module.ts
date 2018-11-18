import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { MaterialModules } from '../materials.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent]
})
export class AuthModule {}
