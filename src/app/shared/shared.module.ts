import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BREAKPOINT, FlexLayoutModule } from '@angular/flex-layout';
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
