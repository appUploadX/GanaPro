import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDetailsPage } from './tenant-details.page';

describe('TenantDetailsPage', () => {
  let component: TenantDetailsPage;
  let fixture: ComponentFixture<TenantDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
