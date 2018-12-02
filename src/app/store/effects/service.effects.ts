import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, State, select } from '@ngrx/store';
import { AngularFireDatabase } from '@angular/fire/database';
import { ServicesActionTypes } from '@constants/*';
import { LoadServicesSuccess, ErrorService, LoadServices } from '@actions/*';
import { Service, AppStore } from '@models/*';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { selectCurrentBusinessId } from '@selectors/*';


@Injectable()
export class ServiceEffects {

  constructor(
    private db: AngularFireDatabase,
    private actions$: Actions,
    private state: State<AppStore>
  ) { }

  @Effect()
  loadServices$: Observable<Action> = this.actions$.pipe(
    ofType<LoadServices>(ServicesActionTypes.LoadServices),
    switchMap(() => {
      return this.state.pipe(select(selectCurrentBusinessId));
    }),
    switchMap(currentBusiness => this.db.list<Service>('/services', ref => ref.orderByChild('businessId').equalTo(currentBusiness))
    .snapshotChanges()),
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

}
