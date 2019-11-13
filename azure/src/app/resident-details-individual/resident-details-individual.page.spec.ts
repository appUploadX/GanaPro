import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDetailsIndividualPage } from './resident-details-individual.page';

describe('ResidentDetailsIndividualPage', () => {
  let component: ResidentDetailsIndividualPage;
  let fixture: ComponentFixture<ResidentDetailsIndividualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentDetailsIndividualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentDetailsIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
