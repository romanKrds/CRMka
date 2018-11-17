import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AngularFireDatabase } from '@angular/fire/database';
import { ServicesActionTypes } from '@constants/*';
import { LoadServicesSuccess, ErrorService } from '@actions/*';
import { Service } from '@models/*';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class ServiceEffects {
  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType(ServicesActionTypes.LoadServices),
    mergeMap(_ => this.db.list<Service>('/services').snapshotChanges()),
    map(list => {
      return list.map(service => {
        const data = service.payload.val();
        const id = service.payload.key;
        return { id, ...data };
      });
    }),
    map((services: Service[]) => {
      return new LoadServicesSuccess({ services });
    }),
    catchError(errors => of(new ErrorService({ errors })))
  );

  constructor(private actions$: Actions, private db: AngularFireDatabase) {}
}
