import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  BrowserAnimationsModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModules {}
