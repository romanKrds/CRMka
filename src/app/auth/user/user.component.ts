import { Component, OnInit } from '@angular/core';
import { User, AppStore } from 'src/app/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetUser, GoogleLogin, Logout, PasswordLogin, PasswordRegister } from 'src/app/store/actions/user.actions';
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
    ) { }

  ngOnInit() {
    this.user$ = this.state.select(state => state.user.user);
    this.state.dispatch(new GetUser());
  }
  onSubmit() {
    this.state.dispatch(new PasswordLogin(this.loginForm.value));
  }
  onRegister() {
    this.state.dispatch(new PasswordRegister(this.loginForm.value));
  }

  googleLogin() {
    this.state.dispatch(new GoogleLogin());
  }

  logout() {
    this.state.dispatch(new Logout());
  }

  getErrorMessage() {
    this.snackBar.open('Message archived', 'Undo', {
      duration: 3000
    });
  }

}
