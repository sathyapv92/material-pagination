import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsetComponent } from './tset.component';

describe('TsetComponent', () => {
  let component: TsetComponent;
  let fixture: ComponentFixture<TsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
