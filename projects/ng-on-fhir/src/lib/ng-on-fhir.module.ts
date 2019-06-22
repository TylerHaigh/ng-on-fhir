import { NgModule } from '@angular/core';
import { PatientIdentifierPipe } from './pipes/patient-identifier.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    PatientIdentifierPipe
  ],
  exports: [
    PatientIdentifierPipe
  ]
})
export class NgOnFhirModule { }
