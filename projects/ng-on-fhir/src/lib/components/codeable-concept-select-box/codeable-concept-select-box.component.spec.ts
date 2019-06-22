import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeableConceptSelectBoxComponent } from './codeable-concept-select-box.component';

describe('CodeableConceptSelectBoxComponent', () => {
  let component: CodeableConceptSelectBoxComponent;
  let fixture: ComponentFixture<CodeableConceptSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeableConceptSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeableConceptSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
