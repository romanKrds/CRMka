import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCurrentBusinessComponent } from './select-current-business.component';

describe('SelectCurrentBusinessComponent', () => {
  let component: SelectCurrentBusinessComponent;
  let fixture: ComponentFixture<SelectCurrentBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCurrentBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCurrentBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
