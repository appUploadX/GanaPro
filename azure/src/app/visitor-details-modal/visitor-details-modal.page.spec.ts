import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDetailsModalPage } from './visitor-details-modal.page';

describe('VisitorDetailsModalPage', () => {
  let component: VisitorDetailsModalPage;
  let fixture: ComponentFixture<VisitorDetailsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorDetailsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorDetailsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
