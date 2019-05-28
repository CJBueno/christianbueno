import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotleftComponent } from './botleft.component';

describe('BotleftComponent', () => {
  let component: BotleftComponent;
  let fixture: ComponentFixture<BotleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
