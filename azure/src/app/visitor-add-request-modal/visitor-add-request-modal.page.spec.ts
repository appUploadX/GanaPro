import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAddRequestModalPage } from './visitor-add-request-modal.page';

describe('VisitorAddRequestModalPage', () => {
  let component: VisitorAddRequestModalPage;
  let fixture: ComponentFixture<VisitorAddRequestModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorAddRequestModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAddRequestModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
