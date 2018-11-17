import { StatusesActionTypes } from './../constants/statuses.constants';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, mergeMap} from 'rxjs/operators';
import * as statusesActions from '../actions/statuses.actions';

import { Action } from '@ngrx/store';
import { Status } from '@models/status.model';

@Injectable()
export class StatusesEffects {
  @Effect()
  loadStatuses$: Observable<Action> = this.actions$.pipe(
    ofType(StatusesActionTypes.GetStatuses),
    mergeMap( _ => this.db.list('/states').snapshotChanges()),
    map(
      (statuses: any[]) => {
        return statuses.map(
          (status) => {
            const id = status.payload.key;
            const value = status.payload.val();
            return { id, ...value}
          }
        );
      }
    ),
    map(
      (statuses: Status[]) => {
        return new statusesActions.LoadStatuses({statuses});
      }
    )
  );

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}
