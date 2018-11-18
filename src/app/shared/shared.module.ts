import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/materials.module';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class SharedModule { }
