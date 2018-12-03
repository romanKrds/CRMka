import { GoogleLogin, Logout, PasswordLogin } from '@actions/*';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppStore, User } from '@models/*';
import { select, Store } from '@ngrx/store';
import { selectStateUser } from '@selectors/*';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$: Observable<User>;

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private state: Store<AppStore>,
    public snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user$ = this.state.pipe(select(selectStateUser));
    this.state.pipe(select(state => state.currentClient.error)).subscribe(
      error => this.getErrorMessage(error)
      );
  }
  onSubmit() {
    this.state.dispatch(new PasswordLogin(this.loginForm.value));
  }

  googleLogin() {
    this.state.dispatch(new GoogleLogin());
  }

  getErrorMessage(error) {
    if (error) {
      this.snackBar.open(error, 'Undo', {
        duration: 10000
      });
    }
  }

}
