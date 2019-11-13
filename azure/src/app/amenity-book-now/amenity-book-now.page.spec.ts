import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityBookNowPage } from './amenity-book-now.page';

describe('AmenityBookNowPage', () => {
  let component: AmenityBookNowPage;
  let fixture: ComponentFixture<AmenityBookNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityBookNowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityBookNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
