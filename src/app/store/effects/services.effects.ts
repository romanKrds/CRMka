import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ServicesActionTypes } from '../constants/services.constants';
import {
  AddServicess,
  AddServices,
  LoadServicess,
  UpsertServicess
} from '../actions/services.actions';
import { Action } from '@ngrx/store';
import { Services } from '../../models';

@Injectable()
export class ServicesEffects {
  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType(ServicesActionTypes.GetServices),
    mergeMap(_ => this.db.list<Services>('/services').snapshotChanges()),
    map(a => {
      return a.map(b => {
        const data = b.payload.val();
        const id = b.payload.key;
        return { id, ...data };
      });
    }),
    map((service: Services[]) => {
      return new LoadServicess({ servicess: service });
    })
  );

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}
