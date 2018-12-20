import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppStore } from '@models/*';
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
  }
}
