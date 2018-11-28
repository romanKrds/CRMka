import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { CurrentBusiness } from '@constants/*';
import { SelectCurrentBusiness } from '@actions/*';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class CurrentBusinessEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({dispatch: false})
  selectCurrentBusiness: Observable<Action | {}> = this.actions$.pipe(
    ofType<SelectCurrentBusiness>(CurrentBusiness.SelectBusiness),
    tap(() => {
      this.router.navigate(['base']);
    }),
    catchError(errors => {
      console.log(errors);
      return errors;
    })
  );
}
