import { NgModule } from '@angular/core';

import { 
  MatCardModule, 
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';

const MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {}
