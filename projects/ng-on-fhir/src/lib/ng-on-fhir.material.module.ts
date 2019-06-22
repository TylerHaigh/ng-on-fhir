import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

const materials = [
  MatSelectModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class NgOnFhirMaterialModule { }
