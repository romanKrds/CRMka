import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';

const MODULES = [
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModules {}
