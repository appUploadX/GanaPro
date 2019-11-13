import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDetailsListPage } from './resident-details-list.page';

describe('ResidentDetailsListPage', () => {
  let component: ResidentDetailsListPage;
  let fixture: ComponentFixture<ResidentDetailsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentDetailsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentDetailsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
