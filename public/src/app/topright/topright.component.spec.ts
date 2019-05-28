import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprightComponent } from './topright.component';

describe('ToprightComponent', () => {
  let component: ToprightComponent;
  let fixture: ComponentFixture<ToprightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToprightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToprightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
