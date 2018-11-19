import { Component, OnInit } from '@angular/core';
import { User, AppStore } from '@models/*';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  GetUser,
  GoogleLogin,
  Logout,
  PasswordLogin,
  PasswordRegister
} from '@actions/*';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  });

  constructor(
    private state: Store<AppStore>,
    public snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user$ = this.state.select(state => state.user);
    // this.state.dispatch(new GetUser());
    this.state.select(state => state.user.error).subscribe(
    error => this.getErrorMessage(error)
    );
  }

  logout() {
    this.state.dispatch(new Logout());
  }

  getErrorMessage(error) {
    if (error) {
      this.snackBar.open(error, 'Undo', {
        duration: 10000
      });
    }
  }
}
