import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMgmtPageComponent } from './admin-mgmt-page.component';

describe('AdminMgmtPageComponent', () => {
  let component: AdminMgmtPageComponent;
  let fixture: ComponentFixture<AdminMgmtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMgmtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMgmtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
