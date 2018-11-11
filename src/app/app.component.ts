import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMka';

  constructor (
    private db: AngularFireDatabase
  ) {

    this.db.list('/clients').valueChanges()
    .subscribe(
        value => console.log(value)
      );
  }
}
