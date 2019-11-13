import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeRulesListPage } from './notice-rules-list.page';

describe('NoticeRulesListPage', () => {
  let component: NoticeRulesListPage;
  let fixture: ComponentFixture<NoticeRulesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeRulesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeRulesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
