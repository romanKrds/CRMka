import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadStatusesSuccess, ErrorStatuses } from '@actions/*';
import { StatusesActionTypes } from '@constants/*';
import { Status } from '@models/*';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';



@Injectable()
export class StatusesEffects {

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}

  @Effect()
  loadStatuses$: Observable<Action> = this.actions$.pipe(
    ofType(StatusesActionTypes.LoadStatuses),
    switchMap( _ => this.db.list('/states').snapshotChanges()),
    map(
      (statuses: any[]) => {
        return statuses.map(
          (status) => {
            const id = status.payload.key;
            const value = status.payload.val();
            return { id, ...value};
          }
        );
      }
    ),
    map(
      (statuses: Status[]) => {
        return new LoadStatusesSuccess({statuses});
      }
    ),
    catchError(errors => of(new ErrorStatuses({ errors })))
  );
}
