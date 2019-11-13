import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityInfoPage } from './amenity-info.page';

describe('AmenityInfoPage', () => {
  let component: AmenityInfoPage;
  let fixture: ComponentFixture<AmenityInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
