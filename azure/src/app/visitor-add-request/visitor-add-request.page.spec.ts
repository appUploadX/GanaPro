import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAddRequestPage } from './visitor-add-request.page';

describe('VisitorAddRequestPage', () => {
  let component: VisitorAddRequestPage;
  let fixture: ComponentFixture<VisitorAddRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorAddRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAddRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
