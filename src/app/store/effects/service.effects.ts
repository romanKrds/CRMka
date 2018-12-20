import { ErrorService, LoadServices, LoadServicesSuccess } from '@actions/*';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseSnapshot, AngularFireAction } from '@angular/fire/database';
import { ServicesActionTypes } from '@constants/*';
import { AppStore, Service, ServiceWithId } from '@models/*';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, State } from '@ngrx/store';
import { selectCurrentBusinessId } from '@selectors/*';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


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
    switchMap((currentBusiness: string) => this.db.list<Service>(
      '/services', ref => ref.orderByChild('businessId').equalTo(currentBusiness)
      ).snapshotChanges()),
    map((list: AngularFireAction<DatabaseSnapshot<Service>>[]) => {
      return list.map((service: AngularFireAction<DatabaseSnapshot<Service>>) => {
        const data = service.payload.val();
        const id = service.payload.key;
        return { id, ...data };
      });
    }),
    map((services: ServiceWithId[]) => {
      return new LoadServicesSuccess({ services });
    }),
    catchError(errors => of(new ErrorService({ errors })))
  );

}
