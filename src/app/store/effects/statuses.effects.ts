import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { statusesActionTypes } from '../constants/statuses.constants';
import { Action } from "@ngrx/store";
import { AngularFireDatabase } from "@angular/fire/database";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as statusesActions from '../actions/statuses.actions';

@Injectable()
export class StatusesEffects {
  @Effect()
  loadStatuses$: Observable<Action> = this.actions$
    .pipe(
      ofType(statusesActionTypes.LOAD_STATUSES_TYPES),
      mergeMap( _ => this.db.list('/states').snapshotChanges()),
      map(
        ( statuses => {
          return statuses.map(status => {
            const data = status.payload.val();
            const id = status.payload.key;
            return { id, ...data };
          });
        })
      ),
      map(data => (
        new statusesActions.getStatusesSuccess(data)
      )),
      catchError( _ => of(
        new statusesActions.getStatusesError()
      ))
    )
  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}