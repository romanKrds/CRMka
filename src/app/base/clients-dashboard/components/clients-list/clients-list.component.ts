import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State, select } from '@ngrx/store';
import { AppStore } from '@models/*';
import { selectCustomersIds } from '@selectors/*';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  clientsIds$: Observable<string[] | number[]>

  constructor(private state: State<AppStore>) { }

  ngOnInit() {
    this.clientsIds$ = this.state.pipe(select(selectCustomersIds));
  }

}
