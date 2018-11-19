import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from '@models/*';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PasswordLogin, GoogleLogin, GetUser } from '@actions/*';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    this.state.dispatch(new GetUser());
    this.state.select(state => state.user.error).subscribe(
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
