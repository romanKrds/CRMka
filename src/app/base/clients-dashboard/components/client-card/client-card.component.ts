import { Component, OnInit, Input } from '@angular/core';
import { State, select } from '@ngrx/store';
import { AppStore, CustomerWithId } from '@models/*';
import { getCustomerById } from '@selectors/*';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  @Input() clientId: string;

  customer$: Observable<CustomerWithId>

  constructor(private state: State<AppStore>) { }

  ngOnInit() {
    this.customer$ = this.state.pipe(select(getCustomerById(), this.clientId));
  }

}
