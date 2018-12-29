import { AngularFireAction, AngularFireDatabase, AngularFireList, DatabaseSnapshot } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { combineLatest, Observable } from 'rxjs';

type retrieveMultipleKeysResp<T> = Observable<AngularFireAction<DatabaseSnapshot<AngularFireList<T>>>[][]>;

export class CommonEffectsBehavior {

  protected dataBase: AngularFireDatabase;

  constructor(
    db: AngularFireDatabase
  ) {
    this.dataBase = db;
  }

  public retrieveMultipleKeys<T>(pathOrRef: string, keys: string[] = []): retrieveMultipleKeysResp<T> {
    return combineLatest(
      keys.map((key: string) => {
        return this.dataBase.list<AngularFireList<T>>(
          pathOrRef,
          (ref: DatabaseReference) => ref.orderByKey().equalTo(key)
        )
          .snapshotChanges();
      }));
  }
}
