import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductCardComponent } from './poduct-card.component';

describe('PoductCardComponent', () => {
  let component: PoductCardComponent;
  let fixture: ComponentFixture<PoductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
