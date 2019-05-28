import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotrightComponent } from './botright.component';

describe('BotrightComponent', () => {
  let component: BotrightComponent;
  let fixture: ComponentFixture<BotrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
