import { NgModule } from '@angular/core';

import { 
  MatCardModule, 
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
  
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {}
