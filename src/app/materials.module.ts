import { NgModule } from '@angular/core';

import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';

const MODULES = [
  MatCardModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {}
