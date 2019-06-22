/// <reference types="@types/fhir" />

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fhir-codeable-concept-select-box',
  templateUrl: './codeable-concept-select-box.component.html',
  styleUrls: ['./codeable-concept-select-box.component.css']
})
export class CodeableConceptSelectBoxComponent implements OnInit {

  @Input() codeableConcept: fhir.CodeableConcept;

  constructor() { }

  ngOnInit() {
  }

}
