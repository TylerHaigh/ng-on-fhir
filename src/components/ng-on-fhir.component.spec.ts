import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnFhirComponent } from './ng-on-fhir.component';

describe('NgOnFhirComponent', () => {
  let component: NgOnFhirComponent;
  let fixture: ComponentFixture<NgOnFhirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnFhirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnFhirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
