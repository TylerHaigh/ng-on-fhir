import { NgModule } from '@angular/core';
import { PatientIdentifierPipe } from './pipes/patient-identifier.pipe';
import { CodeableConceptSelectBoxComponent } from './components/codeable-concept-select-box/codeable-concept-select-box.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { NgOnFhirMaterialModule } from './ng-on-fhir.material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgOnFhirMaterialModule
  ],
  declarations: [
    PatientIdentifierPipe,
    CodeableConceptSelectBoxComponent
  ],
  exports: [
    PatientIdentifierPipe,
    CodeableConceptSelectBoxComponent
  ]
})
export class NgOnFhirModule { }
