import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadStatusesSuccess, ErrorStatuses } from '@actions/index';
import { StatusesActionTypes } from '@constants/index';
import { Status } from '@models/index';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';



@Injectable()
export class StatusesEffects {

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}

  @Effect()
  loadStatuses$: Observable<Action> = this.actions$.pipe(
    ofType(StatusesActionTypes.LoadStatuses),
    mergeMap( _ => this.db.list('/states').snapshotChanges()),
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
