import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/materials.module';
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
