import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeRulesDetailsPage } from './notice-rules-details.page';

describe('NoticeRulesDetailsPage', () => {
  let component: NoticeRulesDetailsPage;
  let fixture: ComponentFixture<NoticeRulesDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeRulesDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeRulesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
