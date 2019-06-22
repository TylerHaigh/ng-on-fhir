import { NgModule } from '@angular/core';
import { NgOnFhirComponent } from './components/ng-on-fhir.component';
import { HelloComponent } from './lib/hello/hello.component';

@NgModule({
  declarations: [NgOnFhirComponent, HelloComponent],
  imports: [
  ],
  exports: [NgOnFhirComponent]
})
export class NgOnFhirModule { }
