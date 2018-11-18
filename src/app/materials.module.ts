import { NgModule } from '@angular/core';

import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule {}
