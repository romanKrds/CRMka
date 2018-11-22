import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatNativeDateModule,
} from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';



const MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {}
