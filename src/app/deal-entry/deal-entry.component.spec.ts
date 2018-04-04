import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealEntryComponent } from './deal-entry.component';

describe('DealEntryComponent', () => {
  let component: DealEntryComponent;
  let fixture: ComponentFixture<DealEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
