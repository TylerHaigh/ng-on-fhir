import { TestBed } from '@angular/core/testing';

import { NgOnFhirService } from './ng-on-fhir.service';

describe('NgOnFhirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOnFhirService = TestBed.get(NgOnFhirService);
    expect(service).toBeTruthy();
  });
});
