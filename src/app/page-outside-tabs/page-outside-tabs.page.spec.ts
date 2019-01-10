import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOutsideTabsPage } from './page-outside-tabs.page';

describe('PageOutsideTabsPage', () => {
  let component: PageOutsideTabsPage;
  let fixture: ComponentFixture<PageOutsideTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOutsideTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOutsideTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
