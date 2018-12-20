import { ErrorStatuses, LoadStatusesSuccess } from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { StatusesActionTypes } from '@constants/*';
import { StatusWithId } from '@models/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
      (statuses: StatusWithId[]) => {
        return new LoadStatusesSuccess({statuses});
      }
    ),
    catchError(errors => of(new ErrorStatuses({ errors })))
  );
}
