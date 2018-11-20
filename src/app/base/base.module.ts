import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { BaseRoutingModule } from './base-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
  ],
  declarations: [
    BaseComponent,
    SidebarComponent
  ]
})
export class BaseModule { }
