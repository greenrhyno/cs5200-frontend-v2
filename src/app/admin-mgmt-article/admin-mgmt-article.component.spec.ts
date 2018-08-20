import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMgmtArticleComponent } from './admin-mgmt-article.component';

describe('AdminMgmtArticleComponent', () => {
  let component: AdminMgmtArticleComponent;
  let fixture: ComponentFixture<AdminMgmtArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMgmtArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMgmtArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
