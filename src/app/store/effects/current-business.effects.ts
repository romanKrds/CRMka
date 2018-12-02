import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { Action } from '@ngrx/store';
import { CurrentBusiness } from '@constants/*';
import {
  SelectCurrentBusiness,
  LoadCustomers,
  LoadServices,
  LoadOrders,
  LoadStatuses
} from '@actions/*';
import { tap, catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class CurrentBusinessEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  selectCurrentBusiness: Observable<Action | {}> = this.actions$.pipe(
    ofType<SelectCurrentBusiness>(CurrentBusiness.SelectBusiness),
    tap(() => {
      this.router.navigate(['base']);
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
