import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityBookingListPage } from './amenity-booking-list.page';

describe('AmenityBookingListPage', () => {
  let component: AmenityBookingListPage;
  let fixture: ComponentFixture<AmenityBookingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityBookingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityBookingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
