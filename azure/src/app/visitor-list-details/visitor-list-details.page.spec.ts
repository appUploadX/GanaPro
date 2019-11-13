import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorListDetailsPage } from './visitor-list-details.page';

describe('VisitorListDetailsPage', () => {
  let component: VisitorListDetailsPage;
  let fixture: ComponentFixture<VisitorListDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorListDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorListDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
