import { LoadCustomers, LoadOrders, LoadServices, LoadStatuses, SelectCurrentBusiness } from '@actions/*';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentBusiness } from '@constants/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class CurrentBusinessEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  selectCurrentBusiness: Observable<Action | {}> = this.actions$.pipe(
    ofType<SelectCurrentBusiness>(CurrentBusiness.SelectBusiness),
    tap(() => {
      this.router.navigate(['orders']);
    }),
    mergeMap(() =>
      from([
        new LoadCustomers(),
        new LoadStatuses(),
        new LoadServices(),
        new LoadOrders()
      ])
    ),
    catchError(errors => {
      console.log(errors);
      return errors;
    })
  );
}
