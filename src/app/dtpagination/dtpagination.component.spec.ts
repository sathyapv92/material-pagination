import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpaginationComponent } from './dtpagination.component';

describe('DtpaginationComponent', () => {
  let component: DtpaginationComponent;
  let fixture: ComponentFixture<DtpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
