import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/materials.module';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
];

@NgModule({
  imports: [
    ...MODULES,
    FlexLayoutModule.withConfig({useColumnBasisZero: false})
  ],
  exports: [
    ...MODULES,
    FlexLayoutModule
  ]
})
export class SharedModule {}
