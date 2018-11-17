import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OrdersEffects } from './orders.effects';

describe('OrdersEffects', () => {
  let actions$: Observable<any>;
  let effects: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrdersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(OrdersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
