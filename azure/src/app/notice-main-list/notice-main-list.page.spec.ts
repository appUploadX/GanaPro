import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMainListPage } from './notice-main-list.page';

describe('NoticeMainListPage', () => {
  let component: NoticeMainListPage;
  let fixture: ComponentFixture<NoticeMainListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeMainListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeMainListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
