import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ServicesActionTypes } from '../constants/services.constants';
import {
  AddServices,
  AddService,
  LoadServices,
  UpsertServices,
  ErrorService
} from '../actions/services.actions';
import { Action } from '@ngrx/store';
import { Service } from '../../models';

@Injectable()
export class ServiceEffects {
  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType(ServicesActionTypes.GetService),
    mergeMap(_ => this.db.list<Service>('/services').snapshotChanges()),
    map(list => {
      return list.map(service => {
        const data = service.payload.val();
        const id = service.payload.key;
        return { id, ...data };
      });
    }),
    map((services: Service[]) => {
      return new LoadServices({ services });
    }),
    catchError(errors => of(new ErrorService({ errors })))
  );

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}
